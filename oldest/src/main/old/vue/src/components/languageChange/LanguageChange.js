export default {
    name: 'LanguageChange',
    created: function () {
        this.init();
    },
    data: function () {
        return {
            translations: jsdi.get().languageService.translations
        };
    },
    methods: {
        init: function () {
            console.log("LanguageChange init");
        },
        changeTo: function (language) {
            jsdi.get().languageService.changeTo(language);
        }
    }
}
