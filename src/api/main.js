/**
 * Created by Twinna on 2017/12/4.
 */
import axios from 'axios';
import iView from 'iview';

import process from '../config';
Vue.prototype.$http = axios
//ajax
let instance = axios.create({
    baseURL: process.API_ROOT,
    timeout: 30000,
    // headers:{''}
});
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.get('/longRequest', {
    timeout: 5000
});
//添加请求拦截器
instance.interceptors.request.use(function (config) {
    // iView.LoadingBar.stat();
    // let user = JSON.parse();
    // !config.params && (config.params = {});
    // if (config.method === 'get' && user && user.univ_id) {
        config.params.univ_id = '44444';
    // }
    return config;
});
instance.interceptors.response.use(res => {
        // iView.LoadingBar.finish();
        console.log(res.data);
        // if (res.stauts == 200 && res.data.code === 0) return res.data;
        // else {
        //     iView.LoadingBar.error();
        //     console.log(res.data.info)
        // }
    }, error => {
        return Promise.reject(error)
    }
);
