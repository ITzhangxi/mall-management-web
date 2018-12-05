<template>
    <div class="zx-form">
        <el-form
                ref="form"
                :model="form"
                label-width="80px"
                status-icon
                :rules="rules">
            <el-form-item
                    :label="item.label"
                    v-for="(item,index) in data"
                    :key="index"
                    :prop="item.key">
                <el-select
                        v-if="item.type === 'select'"
                        v-model="form[item.key]"
                        :placeholder="item.placeholder">
                    <el-option v-for="(option,i) in item.options"
                               :key="i"
                               :label="option.label"
                               :value="option.value"></el-option>
                </el-select>
                <el-input
                        v-else
                        v-model="form[item.key]"
                        :placeholder="item.placeholder"
                >
                </el-input>
            </el-form-item>
            <el-form-item :receive="receive">
                <div class="btn" style="float: right;">
                    <el-button type="primary" @click="submitForm">立即创建</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "ZxForm",
        props: {
            data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                form: {},
                rules: {}
            }
        },
        computed: {
            receive() {
                this.data.forEach(item => {
                    this.$set(this.form, item.key, item.value)
                    if (item.rule && item.rule.length) {
                        this.$set(this.rules, item.key, item.rules)
                    }
                })
                return 1
            }
        },
        methods: {
            submitForm() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm() {
                console.log(this.form);
                this.$refs.form.resetFields();
            }
        }
    }
</script>

<style scoped>

</style>