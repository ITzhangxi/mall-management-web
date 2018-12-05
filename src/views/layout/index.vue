<template>
    <div class="global-container" id="layout">
        <div class="layout-left" :class="{'close':collapse}">
            <div class="logo">
                <span>后台管理</span>
                <!--<transition name="fade" v-if="!collapse">-->
                    <!--<span v-if="!collapse">管理</span>-->
                <!--</transition>-->
            </div>
            <layout-menu></layout-menu>
        </div>
        <div class="layout-right">
            <layout-header ref="layoutHeader" class="layout-header"></layout-header>
            <div class="layout-content"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import LayoutHeader from "../header/index.vue";
    import LayoutMenu from "../menu/index.vue";
    import {State} from "vuex-class";

    @Component({
        components: {
            LayoutHeader,
            LayoutMenu,
        },
    })
    export default class Index extends Vue {
        @State public collapse !: boolean;
    }
</script>
<style lang="scss">
    #layout {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: row;
        .layout-left {
            width: 20rem;
            background-color: #373737;
            transition: width 0.4s;
            &.close {
                width: 5.4rem;
            }
            .logo {
                height: 5rem;
                background-color: #2c2c2c;
                color: #ffffff;
                font-size: 2rem;
                display: flex;
                align-items: center;
                padding-left: 1rem;
                .fade-enter-active, .fade-leave-active {
                    transition: opacity .5s;
                }
                .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                    opacity: 0;
                }
            }
        }
        .layout-right {
            flex: 1;
            position: relative;
            .layout-content {
                position: absolute;
                top: 5rem;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: cadetblue;
            }
        }
    }
</style>
