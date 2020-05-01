describe('languageService', function () {

    var languageService;

    beforeEach(function () {
        languageService = jsdi.get().languageService;
    });

    it('should exist', function () {
        expect(languageService).toBeDefined();
    })

    it('should have default translation selected', function () {
        expect(languageService.translations.current.label).toBe('Näidis tõlgitav pealdis');
    })

    it('should change translation for label when it is changed to english', function () {
        languageService.changeTo('en');
        expect(languageService.translations.current.label).toBe('Example translatable label');
    })

    it('should change translation for label when it is changed to russian', function () {
        languageService.changeTo('ru');
        expect(languageService.translations.current.label).toBe('Образец переводной надписи');
    })

    it('should change translation to default language for label when it is changed to nonsuported language', function () {
        languageService.changeTo('foo-bar-language');
        expect(languageService.translations.current.label).toBe('Näidis tõlgitav pealdis');
    })
})
