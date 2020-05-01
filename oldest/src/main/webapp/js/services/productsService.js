
jsdi.service("productsService", function () {

    var productsService = {
        inject: ['productsResource']
    };

    productsService.init = function () {
    };

    productsService.getAllProducts = function () {
        var promise = new Promise(function (resolve, reject) {
            if (productsService.allProducts) {
                resolve(productsService.allProducts);
            } else {
                productsService.productsResource.getAllProducts().then(function (allProducts) {
                    productsService.setAllProducts(allProducts);
                    resolve(productsService.getAllProducts());
                }).catch(function (errorData) {
                    reject(errorData);
                });
            }
        });
        return promise;
    };

    productsService.setAllProducts = function (allProducts) {
        productsService.allProducts = allProducts;
    };

    productsService.getAllProductsCurrent = function () {// For human readability. getService('productsService').getAllProductsCurrent();
        return JSON.parse(JSON.stringify(productsService.allProducts));
    };

    return productsService;
});
