package com.autonomy.abc.selenium.keywords;

import com.autonomy.abc.selenium.actions.wizard.OptionWizardStep;
import com.autonomy.abc.selenium.actions.wizard.Wizard;
import com.autonomy.abc.selenium.actions.wizard.WizardStep;
import com.autonomy.abc.selenium.page.keywords.CreateNewKeywordsPage;
import com.autonomy.abc.selenium.util.Language;

class KeywordGroup {
    private String keywordString;
    private KeywordType type;
    private Language language;

    public KeywordGroup(KeywordType type, Language language, String... keywords) {
        this.keywordString = String.join(" ", keywords);
        this.type = type;
        this.language = language;
    }

    public Wizard makeWizard(CreateNewKeywordsPage newKeywordsPage) {
        return new KeywordWizard(newKeywordsPage);
    }

    private class KeywordWizard extends Wizard {
        private CreateNewKeywordsPage page;

        private KeywordWizard(CreateNewKeywordsPage newKeywordsPage) {
            page = newKeywordsPage;
            buildSteps();
        }

        private void buildSteps() {
            this.add(new TypeStep(page));
            this.add(new InputStep(page));
        }

        @Override
        public void next() {
            if (onFinalStep()) {
                page.finishWizardButton().click();
            } else {
                page.continueWizardButton().click();
                incrementStep();
            }
            page.loadOrFadeWait();
        }

        @Override
        public void cancel() {
            page.cancelWizardButton().click();
        }
    }

    private class TypeStep extends OptionWizardStep {
        private CreateNewKeywordsPage page;

        public TypeStep(CreateNewKeywordsPage container) {
            super(container, "Select Type of Keywords", type.getOption());
            this.page = container;
        }

        @Override
        public Object apply() {
            super.apply();
            page.selectLanguage(language.toString());
            return null;
        }
    }

    private class InputStep implements WizardStep {
        private CreateNewKeywordsPage page;

        public InputStep(CreateNewKeywordsPage container) {
            this.page = container;
        }

        @Override
        public String getTitle() {
            return type.getInputTitle();
        }

        @Override
        public Object apply() {
            page.addKeywordsInput().setAndSubmit(keywordString);
            return null;
        }
    }

}
