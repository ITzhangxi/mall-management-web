<template>
    <div class="global-container" id="layout">
        <div class="layout-left" :class="{'close':collapse}">
            <div class="logo">后台管理</div>
            <layout-menu></layout-menu>
        </div>
        <div class="layout-right">
            <layout-header ref="layoutHeader" class="layout-header"></layout-header>
            <div class="layout-content"></div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LayoutHeader from '../header/index.vue'
import LayoutMenu from '../menu/index.vue'
import {State} from 'vuex-class'

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
                height: 6rem;
                background-color: #2c2c2c;
                color: #ffffff;
                font-size: 2rem;
                display: flex;
                align-items: center;
                padding-left: 1rem;
            }
        }
        .layout-right {
            flex: 1;
            position: relative;
            .layout-content {
                position: absolute;
                top: 6rem;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: cadetblue;
            }
        }
    }
</style>
