<template>
    <div class="global-container">
        <el-menu
                :default-active="defaultActive"
                class="el-menu-vertical-demo"
                background-color="#373737"
                text-color="#fff"
                active-text-color="#fff"
                :collapse="collapse"
                :collapse-transition="false"
                router>
            <el-submenu index="/">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>设置</span>
                </template>
                <el-menu-item index="/setMenu">
                    <i class="el-icon-menu"></i>
                    <span>菜单</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {State} from 'vuex-class';

    @Component({
        components: {},
    })
    export default class Menu extends Vue {
        @State public collapse !: boolean;

        private defaultActive: string = ''

        private mounted() {
            // 根据浏览器地址 默认菜单激活菜单
            this.defaultActive = this.$route.path
        }
    };
</script>
<style lang="scss">
</style>
