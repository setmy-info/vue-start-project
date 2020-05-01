jsdi.service("personService", function () {

    var personService = {
        $log: null
    };

    personService.init = function () {
        console.log("initalizing personService");
    };

    personService.personModel = {
        person: {firstName: 'Peeter', lastName: 'Esimene'}
    };

    personService.getPerson = function () {
        this.personObject;
    };

    personService.setPerson = function (personObject) {
        this.personModel.person = personObject;
    };

    return personService;
});
