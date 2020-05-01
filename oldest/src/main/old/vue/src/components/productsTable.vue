<template>
    <table class="productsTable">
        <tr>
            <th>Id</th>
            <th>{{translations.current.productLabel}}</th>
            <th>{{translations.current.productPrice}}</th>
            <th>{{translations.current.productChoosen}}</th>
        </tr>
        <tr v-for="product in products">
            <td>{{product.id}}</td>
            <td>{{product.label}}</td>
            <td>{{product.cost | inCurrency('EUR')}}</td>
            <td><input type="checkbox" v-model="product.isChecked"></td>
        </tr>
    </table>
</template>

<script>

    export default {
        name: 'productsTable',
        props: ['products'],
        created: function () {
            this.init();
        },
        methods: {
            init: function () {
            }
        }
    }
</script>

<style scoped>

</style>

