package com.autonomy.abc.selenium.menu;

import com.autonomy.abc.selenium.page.admin.AboutPage;
import com.autonomy.abc.selenium.page.admin.SettingsPage;
import com.autonomy.abc.selenium.page.keywords.OPCreateNewKeywordsPage;
import com.autonomy.abc.selenium.page.keywords.OPKeywordsPage;
import com.autonomy.abc.selenium.page.login.OPLoginPage;
import com.autonomy.abc.selenium.page.overview.OverviewPage;
import com.autonomy.abc.selenium.page.promotions.*;
import com.autonomy.abc.selenium.page.search.EditDocumentReferencesPage;
import com.autonomy.abc.selenium.page.search.OPSearchPage;
import com.autonomy.abc.selenium.users.OPUsersPage;
import com.autonomy.abc.selenium.util.ParametrizedFactory;
import org.openqa.selenium.WebDriver;

public enum OPISOPage implements PageMapper.Page {
    LOGIN(new OPLoginPage.Factory(), OPLoginPage.class),

    OVERVIEW(NavBarTabId.OVERVIEW, new OverviewPage.Factory(), OverviewPage.class),

    PROMOTIONS(NavBarTabId.PROMOTIONS, new OPPromotionsPage.Factory(), OPPromotionsPage.class),
    PROMOTION_WIZARD(new OPCreateNewPromotionsPage.Factory(), OPCreateNewPromotionsPage.class),
    PROMOTION_DETAILS(new OPPromotionsDetailPage.Factory(), OPPromotionsDetailPage.class),
    EDIT_REFERENCES(new EditDocumentReferencesPage.Factory(), EditDocumentReferencesPage.class),
    SCHEDULE(new SchedulePage.Factory(), SchedulePage.class),

    KEYWORDS(NavBarTabId.KEYWORDS, new OPKeywordsPage.Factory(), OPKeywordsPage.class),
    KEYWORD_WIZARD(new OPCreateNewKeywordsPage.Factory(), OPCreateNewKeywordsPage.class),

    SEARCH(NavBarTabId.SEARCH, new OPSearchPage.Factory(), OPSearchPage.class),

    ABOUT(new AboutPage.Factory(), AboutPage.class),
    USERS(new OPUsersPage.Factory(), OPUsersPage.class),
    SETTINGS(new SettingsPage.Factory(), SettingsPage.class);

    private final Class<?> pageType;
    private final NavBarTabId tabId;
    private ParametrizedFactory<WebDriver, ?> factory;

    <T> OPISOPage(ParametrizedFactory<WebDriver, T> factory, Class<? super T> type) {
        this(null, factory, type);
    }

    <T> OPISOPage(NavBarTabId tab, ParametrizedFactory<WebDriver, T> factory, Class<? super T> type) {
        tabId = tab;
        pageType = type;
        this.factory = factory;
    }

    @Override
    public Class<?> getPageType() {
        return pageType;
    }

    @Override
    public NavBarTabId getId() {
        return tabId;
    }

    @SuppressWarnings("unchecked")
    public <T> T safeLoad(Class<T> type, WebDriver driver) {
        if (type.isAssignableFrom(pageType)) {
            return (T) safeLoad(driver);
        }
        return null;
    }

    protected Object safeLoad(WebDriver driver) {
        return this.factory.create(driver);
    }
}
