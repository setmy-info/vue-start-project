<template>
    <div class="creditsView">
        <span class="label">{{translations.current.authorsLabel}}</span>
        <span class="authors" v-for="author in authors">{{author}}</span>
        <topComponent></topComponent>
    </div>
</template>
<script src="./authors.js"></script>
<style src="./authors.css" scoped></style>
