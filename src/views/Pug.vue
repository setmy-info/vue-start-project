<template lang="pug">
  div(class="about pug")
    h1 {{text}}
    i(class="material-icons") face
    div {{money | inCurrency('EUR')}}
    span(v-feature="'featureName'") Feature is ON!
</template>
<script src="./Pug.js" />
<style scoped src="./Pug.less" lang="less"/>
