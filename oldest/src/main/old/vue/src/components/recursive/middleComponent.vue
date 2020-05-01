<template>
    <div class="middleComponent">
        <table>
            <tr>
                <td>This is middle component</td>
                <td>{{forRecursiveService.message}}</td>
                <td><input v-model="data.name"></td>
                <td>{{data.name}}</td>
            </tr>
        </table>
        <bottomComponent></bottomComponent>
    </div>
</template>

<script>

    import bottomComponent from '@/components/recursive/bottomComponent';

    export default {
        name: 'middleComponent',
        dependencies: ["forRecursiveService"],
        components: {
            bottomComponent
        },
        props: {
            data: {
                type: "Object"
            }
        },
        data: function () {
            return jsdi.get().vueDataService.prepare(this, {
            });
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
