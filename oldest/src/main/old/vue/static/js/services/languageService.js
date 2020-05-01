
//getService('languageService').changeTo('et');
//getObject(getService('languageService').translations.current));

jsdi.service("languageService", {

    init: function () {
        console.log("Init languageService");
        this.translations.current = this.translations[this.translations.language];
    },

    translations: {
        language: 'et',
        current: null,
        et: {
            label: "Keel",
            authorsLabel: "Autorid",
            componentsLabel: "Komponendid",
            myNameIsLabel: "Minu nimi on {0}",
            productLabel: "Toode",
            productPrice: "Hind",
            productChoosen: "Valitud",
            productSelect: "Valin"
        },
        en: {
            label: "Language",
            authorsLabel: "Authors",
            componentsLabel: "Components",
            myNameIsLabel: "My name is {0}",
            productLabel: "Product",
            productPrice: "Price",
            productChoosen: "Choosen",
            productSelect: "Choose"
        }
    },

    changeTo: function (language) {
        this.translations.language = language;
        this.translations.current = this.translations[language];
    }
});
