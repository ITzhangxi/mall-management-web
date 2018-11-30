<template>
    <div class="global-container login-wrapper">
        <div class="mask">
            <div class="login">
                <h1 class="title">sign in with your organizational account</h1>
                <el-form ref="form" :model="form" class="login-form">
                    <el-form-item>
                        <el-input v-model="form.username" placeholder="请输入用户名">
                            <i slot="prefix" class="iconfont icon-yonghuming"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.password" placeholder="请输入密码">
                            <i slot="prefix" class="iconfont icon-mima"></i></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.captcha" placeholder="请输入用验证码">
                            <i slot="prefix" class="iconfont icon-yanzhengma"></i></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class Index extends Vue {
        // 登录表单
        form: object = {
            username: "",
            password: "",
            captcha: ""
        };
    }
</script>
<style lang="scss">
    .login-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url('~@/assets/bg.png');
        background-position: center;
        .mask {
            width: 100%;
            height: 40%;
            min-height: 19.8rem;
            max-height: 26rem;
            background-color: rgba(255, 255, 255, .5);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            &:after {
                position: absolute;
                content: '';
                left: 0;
                right: 0;
                height: .5rem;
                bottom: -.5rem;
                background: linear-gradient(to right, #ae242e, #617ecb, #54b6ea, #f9fd39);
            }
            .login {
                height: 100%;
                width: 25%;
                min-width: 28rem;
                float: right;
                margin-right: 15%;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .title {
                    font-size: 2rem;
                }
                .login-form {
                    margin-top: 1rem;
                }
            }
        }
    }
</style>
