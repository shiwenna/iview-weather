import Env from './env';
import axios from 'axios';

axios({

})
let config = {
    env: Env,
    API_ROOT:'http://129.1.18.189:9090/ES_Building',
    port:8080,
    autoOpenBrower:true,
    assetsSubDirectory:'static',
    assetsPublicPath:'/',
    proxyTable:{
        '/api':{
            target:'http://',
            changeOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        }
    }
};
export default config;