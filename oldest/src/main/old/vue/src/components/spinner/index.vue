<template>
    <div class="spinnerComponent" v-show="spinnerData.isLoading">
    </div>
</template>

<script>
    export default {
        name: 'spinnerComponent',
        dependencies: ["dataLoadingSpinnerService"],
        created: function () {
            this.init();
        },
        data: function () {
            return {
                spinnerData: jsdi.get().dataLoadingSpinnerService.spinnerData
            };
        },
        methods: {
            init: function () {
                console.log(this.$options.name);
            }
        }
    }
</script>

<style scoped>
    @-webkit-keyframes rotate-forever {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @-moz-keyframes rotate-forever {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes rotate-forever {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    div.spinnerComponent {
        -webkit-animation-duration: 0.75s;
        -moz-animation-duration: 0.75s;
        animation-duration: 0.75s;
        -webkit-animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: rotate-forever;
        -moz-animation-name: rotate-forever;
        animation-name: rotate-forever;
        -webkit-animation-timing-function: linear;
        -moz-animation-timing-function: linear;
        animation-timing-function: linear;
        height: 30px;
        width: 30px;
        border: 8px solid #050505;
        border-right-color: transparent;
        border-radius: 50%;
        display: inline-block;
    }

    div.spinnerComponent {
        position: absolute;
        top: 50%;
        right: 0;
        bottom: 0;
        left: 50%;
        margin: -15px 0 -15px;
    }
</style>
