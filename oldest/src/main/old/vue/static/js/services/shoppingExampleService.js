
jsdi.service("shoppingExampleService", function () {

    var shoppingExampleService = {
        inject: ['productsService']
    };

    shoppingExampleService.init = function () {
    };

    shoppingExampleService.model = {
        products: null,
        selectedProducts: []
    };

    shoppingExampleService.getAllProducts = function () {
        this.productsService.getAllProducts().then(function (products) {
            shoppingExampleService.setProducts(products);
        });
    };

    shoppingExampleService.setProducts = function (products) {
        this.model.products = products;
    };

    shoppingExampleService.addAllSelectedProducts = function () {
        var i, products = this.model.products, product;
        this.model.selectedProducts = [];//.length = 0; - not working
        for (i = 0; i < products.length; i++) {
            product = products[i];
            if (product.isChecked) {
                this.model.selectedProducts.push(product);
            }
        }
    };

    return shoppingExampleService;
});
