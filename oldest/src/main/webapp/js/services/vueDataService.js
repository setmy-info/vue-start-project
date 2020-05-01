jsdi.service("vueDataService", function () {

    var vueDataService = {
    };

    vueDataService.init = function () {
        console.log("Init vueDataService");
    };

    //TODO : need to check, is it still needed for services injection?
    vueDataService.prepare = function (componentScope, obj) {
        if (obj && componentScope) {
            var propertyName, property;
            for (propertyName in componentScope) {
                if (propertyName.endsWith("Service")) {
                    property = componentScope[propertyName];
                    obj[propertyName] = property;
                }
            }
        }
        return obj;
    };

    return vueDataService;
});

