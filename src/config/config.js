import Env from './env';

let config = {
    env: Env,
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