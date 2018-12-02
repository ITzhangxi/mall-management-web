import Vue from 'vue';
import {Message as ElMessage} from 'element-ui'
// 声明全局方法
declare module 'vue/types/vue' {
    interface Vue {
        axios: any;
        // $message: ElMessage;
    }
}
