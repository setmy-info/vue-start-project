
jsdi.service("productsResource", function () {

    var productsResource = {
    };

    productsResource.ALL_PRODUCTS_URL = 'json/products.json';

    productsResource.getAllProducts = function () {
        var promise = new Promise(function (resolve, reject) {
            axios.get(productsResource.ALL_PRODUCTS_URL).then(function (request) {
                resolve(request.data);
            }).catch(function (errorData) {
                reject(errorData);
            });
        });
        return promise;
    };

    return productsResource;
});
