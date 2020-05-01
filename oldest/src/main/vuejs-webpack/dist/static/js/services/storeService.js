jsdi.service("storeService", function () {

    var storeService = {
        store: null// Just showing it here. It's not autoinjected. It is not initalized by VueJS jet.
    };

    storeService.init = function () {
        console.log("initalizing storeService");
    };

    storeService.setStore = function (store) {
        this.store = store;
    };

    storeService.setPerson = function (personObject) {
        this.store.dispatch('setPerson', personObject);
    };

    storeService.setRoles = function (rolesArray) {
        this.store.dispatch('setRoles', rolesArray);
    };

    return storeService;
});
