jsdi.service("roleService", function () {

    var roleService = {
        $log: null
    };

    roleService.init = function () {
        console.log("initalizing roleService");
    };

    roleService.roleModel = {
        roles: []
    };

    roleService.getRoles = function () {
        this.rolesArray;
    };

    roleService.setRoles = function (rolesArray) {
        this.roleModel.roles = rolesArray;
    };

    return roleService;
});
