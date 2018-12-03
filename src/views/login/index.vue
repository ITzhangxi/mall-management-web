<template>
    <div class="global-container login-wrapper">
        <div class="mask">
            <div class="login">
                <h1 class="title">sign in with your organizational account</h1>
                <el-form ref="form" :model="formData" class="login-form" :rules="rules">
                    <el-form-item prop="username">
                        <el-input v-model="formData.username" placeholder="请输入用户名" @keyup.enter.native="submit">
                            <i slot="prefix" class="iconfont icon-yonghuming"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="formData.password" placeholder="请输入密码" @keyup.enter.native="submit">
                            <i slot="prefix" class="iconfont icon-mima"></i></el-input>
                    </el-form-item>
                    <el-form-item prop="captcha">
                        <div class="captcha">
                            <el-input v-model="formData.captcha" placeholder="请输入验证码" @keyup.enter.native="submit">
                                <i slot="prefix" class="iconfont icon-yanzhengma"></i></el-input>
                            <img @click="getCaptcha" style="width:110px;cursor: pointer;" v-show="captchaUrl"
                                 :src="captchaUrl" alt="验证码">
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="submit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    //    import {Form as ElForm} from 'element-ui'

    @Component({
        components: {},
    })
    export default class Login extends Vue {
        // 后端baseUrl地址
        private captchaUrl: string = ''
        // 校验
        private rules: object = {
            username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
            password: [{required: true, message: '请输入密码', trigger: 'blur'}],
            captcha: [{required: true, message: '请输入验证码', trigger: 'blur'}],
        }

        // 登录表单
        private formData: object = {
            username: '',
            password: '',
            captcha: '',
        };

        private mounted() {
            this.getCaptcha()
        }

        private getCaptcha(): void {
            this.captchaUrl = `${process.env.VUE_APP_baseURL}/user/captcha?${Math.random()}`
        }

        // 提交登录
        private submit(): void {
//            const form = this.$refs.form
            (this.$refs.form as any).validate((valid: boolean) => {
                if (valid) {
                    this.login(this.formData)
                    this.getCaptcha()
                } else {
                    this.getCaptcha()
                    return false;
                }
            });
        }

        // 登录
        private login(data: object): void {
            this.axios.post('/user/login', data).then((res: any) => {
                if (res.code === 0) {
                    this.$message({
                        type: 'success',
                        message: res.data.message,
                    })
                }
            })
        }

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
            min-height: 23.8rem;
            max-height: 30rem;
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
                    .captcha {
                        display: flex;
                        img {
                            margin-left: .5rem;
                        }
                    }
                }
            }
        }
    }
</style>
