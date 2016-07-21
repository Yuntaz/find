package com.autonomy.abc.selenium.find.bi;

import com.hp.autonomy.frontend.selenium.element.Slider;
import com.hp.autonomy.frontend.selenium.util.Waits;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;

public class TopicMapView {
    private final WebDriver driver;
    private final WebElement container;

    public TopicMapView(final WebDriver driver) {
        this.driver = driver;
        this.container = driver.findElement(By.className("service-view-container"));
    }

    public void goToTopicMap() {
        findElement(By.cssSelector("[data-tab-id='topic-map']")).click();
        new WebDriverWait(driver, 15).until(ExpectedConditions.visibilityOf(findElement(By.cssSelector(".entity-topic-map"))));
    }

    public boolean topicMapVisible() {
        return !findElements(By.cssSelector(".entity-topic-map")).isEmpty();
    }

    private WebElement sliderBlock(){return findElement(By.cssSelector(".slider-block div:nth-child(2)"));}

    public Slider relevanceVsClusteringSlider() {
        return new Slider(sliderBlock().findElement(By.cssSelector("[id*='speed-slider']")), driver);
    }

    public Slider numberTopicsSlider() {
        return new Slider(sliderBlock().findElement(By.cssSelector("[id*='count-slider']")), driver);
    }

    //map
    public int numberOfMapEntities() {
        return mapEntities().size();
    }

    public List<WebElement> mapEntities() {
        return findElements(By.cssSelector(".entity-topic-map > svg > path"));
    }

    public List<WebElement> topLevelMapEntities() {
        return findElements(By.cssSelector(".entity-topic-map > svg > path[stroke-opacity='0.2']"));
    }

    public List<WebElement> mapEntityTextElements() {
        return findElements(By.cssSelector(".entity-topic-map > svg > text"));
    }

    public void clickParentEntities() {
        final List<WebElement> webElements = topLevelMapEntities();
        for (WebElement cluster: webElements){
            offCentreClick(cluster);
        }
    }

    public void offCentreClick(WebElement element) {
        int xOffset = element.getSize().getWidth()/8;
        int yOffset = element.getSize().getHeight()/8;
        Actions build = new Actions(driver);
        build.moveToElement(element, xOffset, yOffset).click().build().perform();
    }

    public List<String> returnParentEntityNames() {
        final List<String> clusterNames = new ArrayList<>();
        final int numberOfClusters = topLevelMapEntities().size();
        final List<WebElement> mapEntities = mapEntityTextElements();
        final int max = mapEntities.size() - 1;
        for (int i = 0; i < numberOfClusters; i++) {
            clusterNames.add(mapEntities.get(max - i).getText().replace(" ", "").toLowerCase());
        }
        return clusterNames;
    }

    public String clickChildEntityAndAddText(int noOfClusters) {
        final int maxIndex = mapEntities().size() - 1;
        final int i = maxIndex - 1;
        clickParentEntities();
        final String concept = mapEntityTextElements().get(i - noOfClusters).getText().replace(" ", "").toLowerCase();
        mapEntityTextElements().get(i - noOfClusters).click();
        return concept;
    }

    public void waitForMapLoaded() {
        new WebDriverWait(driver, 30).until(ExpectedConditions.visibilityOfAllElements(mapEntityTextElements()));
    }

    public void waitForReload() {
        new WebDriverWait(driver, 50).until(ExpectedConditions.invisibilityOfElementLocated(By.className("view-server-loading-indicator")));
    }

    private WebElement findElement(final By locator) {
        return container.findElement(locator);
    }

    private List<WebElement> findElements(final By locator) {
        return container.findElements(locator);
    }
}

