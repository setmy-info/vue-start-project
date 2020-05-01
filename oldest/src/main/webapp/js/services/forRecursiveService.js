
jsdi.service("forRecursiveService", function () {

    var forRecursiveService = {
        inject: []
    };

    forRecursiveService.init = function () {
        console.log("Init forRecursiveService");
    };

    forRecursiveService.message = "Hello Components World!";

    forRecursiveService.setMessage = function (newMessage) {
        this.message = newMessage;
    };

    return forRecursiveService;
});
