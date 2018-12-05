<template>
    <div class="global-container header">
        <div class="btn-collapse" @click="collapseBtn">
            <i class="iconfont icon-menu-kaiguan" :class="{'close':collapse}"></i>
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
                张喜
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';

@Component({
    components: {},
})
export default class Header extends Vue {
    @State public collapse !: boolean;
    @Mutation public upDateCollapse !: (collapse: boolean) => void;

    public collapseBtn(): void {
        this.upDateCollapse(!this.collapse);
    }

}
</script>
<style lang="scss">
    .header {
        height: 5rem;
        background-color: #2c2c2c;
        color: #ffffff;
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 1rem;
        .btn-collapse {
            height: 100%;
            width: 4.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background-color: #3d3d3d;
            }
            .icon-menu-kaiguan {
                transform: rotate(0deg);
                transition: transform 0.4s;
                &.close {
                    transform: rotate(90deg);
                }
            }
        }
    }
</style>
