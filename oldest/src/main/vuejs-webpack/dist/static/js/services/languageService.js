jsdi.service("languageService", function () {

    var languageService = {
        $log: null,
        ET: 'et',
        EN: 'en',
        translations: {
            currentTranslation: null,
            current: null,
            et: {
                label: 'Näidis tõlgitav pealdis'
            },
            en: {
                label: 'Example translatable label'
            }
        }
    };

    languageService.init = function () {
        console.log("initalizing languageService");
        this.changeTo(this.ET);
    };

    languageService.translations.current = languageService.translations[languageService.translations.currentTranslation];

    languageService.changeTo = function (lang) {
        this.translations.currentTranslation = lang;
        this.translations.current = this.translations[lang];
    };

    return languageService;
});
