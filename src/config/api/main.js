/**
 * Created by Twinna on 2017/12/4.
 */
import axios from 'axios'
// Vue.prototype.$http = axios
//ajax
util.ajax=axios.create({
    baseURL:process.env.API_ROOT,
    timeout:30000
});
//添加请求拦截器
util.ajax.interceptors.request.use(function (config) {
    iView.LoadingBar.stat();
    let user=JSON.parse();
    !config.params&&(config.params={});
    if(config.method==='get'&&user&&user.univ_id){
        config.params.univ_id=user.univ_id;
    }
    return config;
});
util.ajax.interceptors.response.use(res=> {
    iView.LoadingBar.finish();
    console.log(res.data);
    if (res.stauts == 200 && res.data.code === 0) return res.data;
    else {
        iView.LoadingBar.error();
        console.log(res.data.info)
    }
},error=>{
        return Promise.reject(error)
    }
);
