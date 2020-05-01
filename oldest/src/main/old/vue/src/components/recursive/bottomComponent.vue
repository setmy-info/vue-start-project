<template>
    <div class="bottomComponent">
        <table>
            <tr>
                <td>This is bottom component</td>
                <td>{{forRecursiveService.message}}</td>
                <td><input type="text" v-model="forRecursiveService.message"></td>
                <td>{{translations.current.componentsLabel}}</td>
                <td>{{translations.current.myNameIsLabel | placeHolders(forRecursiveService.message)}}</td>
            </tr>
        </table>
        <spinnerComponent></spinnerComponent>
        <button v-on:click="getPersonData()">Get person Data</button>
        <div>Person data: {{personData.firstName}} {{personData.lastName}}</div>
    </div>
</template>

<script>

    import spinnerComponent from '@/components/spinner';

    export default {
        name: 'bottomComponent',
        dependencies: ["forRecursiveService", "personDataService"],
        components: {
            spinnerComponent
        },
        created: function () {
            this.init();
        },
        data: function () {
            return jsdi.get().vueDataService.prepare(this, {
                personData: {
                    firstName: '',
                    lastName: ''
                }
            });
        },
        methods: {
            init: function () {
                console.log(this.$options.name);
                this.getPersonData();
            },
            getPersonData: function () {
                var that = this;
                this.personDataService.getPersonData().then(function (personData) {
                    console.log(personData);
                    that.personData = personData;
                }).catch(function (error) {
                    console.log(error);
                });
            },
            setPersonData: function (personData) {
                this.personData.firstName = personData.firstName;
                this.personData.lastName = personData.lastName;
            }
        }
    }
</script>

<style scoped>
</style>
