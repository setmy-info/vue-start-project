<template lang="pug">
  div(class="about pug")
    h1 {{text}}
    i(class="material-icons") face
    div {{money | inCurrency('EUR')}}
</template>
<script src="./Pug.js" />
<style scoped src="./Pug.less" lang="less"/>
