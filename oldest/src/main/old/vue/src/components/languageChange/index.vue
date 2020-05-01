<template>
    <div class="languageChange">
        <button v-on:click="changeTo('et');" v-bind:disabled="translations.language==='et'">ET</button>
        <button v-on:click="changeTo('en');" v-bind:disabled="translations.language==='en'">EN</button>
        {{translations.current.label}} : {{translations.language}}
    </div>
</template>
<script src="./LanguageChange.js"></script>
<style src="./LanguageChange.css" scoped></style>
