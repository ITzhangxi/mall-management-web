<template>
    <div class="global-container">
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#373737"
                text-color="#fff"
                active-text-color="#fff"
                :collapse="collapse">
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
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
    }
</script>
<style lang="scss">
</style>
