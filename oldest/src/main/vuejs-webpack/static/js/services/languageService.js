jsdi.service("languageService", function () {

    var languageService = {
        $log: null,
        ET: 'et',
        RU: 'ru',
        EN: 'en',
        translations: {
            currentTranslation: null,
            current: null,
            defaultLanguage: null,
            et: {
                label: 'Näidis tõlgitav pealdis'
            },
            ru: {
                label: 'Образец переводной надписи'
            },
            en: {
                label: 'Example translatable label'
            }
        }
    };

    languageService.init = function () {
        console.log("initalizing languageService");
        this.translations.defaultLanguage = this.ET;
        this.changeTo(this.ET);
    };

    languageService.changeTo = function (lang) {
        var translationsObject = this.translations[lang];
        if (translationsObject) {
            this.translations.currentTranslation = lang;
            this.translations.current = translationsObject;

        } else {
            this.changeTo(this.translations.defaultLanguage);
        }
    };

    return languageService;
});
