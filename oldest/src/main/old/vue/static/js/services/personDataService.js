jsdi.service("personDataService", function () {

    var personDataService = {
        init: function () {
            console.log("Init personDataService");
        }
    };

    personDataService.URL = 'json/person.json';

    personDataService.getPersonData = function () {
        var that = this, promise = new Promise(function (resolve, reject) {
            if (that.personData) {
                resolve(that.personData);
            } else {
                axios.get(personDataService.URL).then(function (request) {
                    that.personData = request.data;
                    resolve(request.data);
                }).catch(function (errorData) {
                    reject(errorData);
                });
            }
        });
        return promise;
    };

    return personDataService;
});

