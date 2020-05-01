<template>
    <div class="recursive">
        <table>
            <tr>
                <td>This is top component</td>
                <td>{{forRecursiveService.message}}</td>
                <td><input v-model="dataHolderObject.name"> </td>
                <td>{{dataHolderObject.name}}</td>
            </tr>
        </table>
        <middleComponent v-bind:data="dataHolderObject"></middleComponent>
    </div>
</template>

<script>

    import middleComponent from '@/components/recursive/middleComponent';

    export default {
        name: 'topComponent',
        dependencies: ["forRecursiveService"],
        components: {
            middleComponent
        },
        data: function () {
            return {
                forRecursiveService: this.forRecursiveService,
                dataHolderObject: {
                    name: "Imre"
                }
            };
        },
        created: function () {
            this.init();
        },
        methods: {
            init: function () {
                console.log(this.$options.name);
            }
        }
    }
</script>

<style scoped>
</style>
