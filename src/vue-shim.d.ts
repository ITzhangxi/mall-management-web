import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        axios: any;
    }
}

// declare module 'vue/types/vue' {
//     interface Vue {
//         $nextTick: any;
//     }
// }
declare module 'vue/types/vue' {
    interface Vue {
        $message: any;
    }
}
