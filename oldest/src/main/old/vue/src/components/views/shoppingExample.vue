<template>
    <div class="shoppingExample">
        <spinnerComponent></spinnerComponent>
        <productsTable v-bind:products="model.products"></productsTable>
        <productsTable v-bind:products="model.selectedProducts"></productsTable>
        <button v-on:click="add()">{{translations.current.productSelect}}</button>
    </div>
</template>

<script>

    import spinnerComponent from '@/components/spinner';
    import productsTable from  '@/components/productsTable';

    export default {
        name: 'shoppingExample',
        components: {
            spinnerComponent,
            productsTable
        },
        data() {
            return {
                model: jsdi.get().shoppingExampleService.model
            };
        },
        created: function () {
            this.init();
        },
        methods: {
            init: function () {
                console.log(this.$options.name);
                this.loadProducts();
            },
            loadProducts: function () {
                this.shoppingExampleService.getAllProducts();
            },
            add: function () {
                this.shoppingExampleService.addAllSelectedProducts();
            }
        }
    }
</script>

<style scoped>

</style>
