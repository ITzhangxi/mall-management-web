"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let config = {
    baseURL: process.env.VUE_APP_baseURL,
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        if (response.status === 200) {
            if (response.data.code === 0) {
                return response.data
            } else {
                Vue.prototype.$message({
                    type: 'success',
                    message: response.data.data.message
                })
                return  response.data
            }
        } else {
            Vue.prototype.$message({
                type: 'error',
                message: '网络出错'
            })
            return response
        }
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;
