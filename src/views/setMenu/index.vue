<template>
    <div class="global-container set-menu">
        <div class="operation-wrapper">
            <div class="operation">
                <span class="operation-btn" @click="dialogTableVisible = true">
                    <i class="iconfont icon-xinzeng"></i>
                    新增
                </span>
            </div>
            <div class="content">

            </div>
        </div>

        <el-dialog title="新增菜单" :visible.sync="dialogTableVisible" width="70%">
            <zx-form :data="zxFromData"></zx-form>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Index extends Vue {
        private dialogTableVisible: boolean = false
        private zxFromData: Array<object> = [{
            label: '活动',
            key: 'key',
            value: 'value',
            type: 'select',
            placeholder: '请选...',
            options: [{
                label: 'label',
                value: 'value',
            }],
            rules: [{required: true, message: '请输入活动名称', trigger: 'blur'},]
        }, {
            label: '输入',
            key: 'text',
            value: 'value',
            placeholder: '请选...',
            rules: [{required: true, message: '请输入活动名称', trigger: 'blur'},]
        }]

    }
</script>
<style lang="scss">
</style>
