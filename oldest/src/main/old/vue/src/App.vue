<template>
    <div id="app">
        <LanguageChange></LanguageChange>
        <img src="./assets/logo.png">
        <router-view/>
    </div>
</template>

<script>

    import LanguageChange from '@/components/languageChange';

    export default {
        name: 'app',
        components: {
            LanguageChange
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
