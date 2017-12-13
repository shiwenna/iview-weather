/**
 * Created by Twinna on 2017/12/4.
 */
import instance from './main'
let logins = {
    login: instance({
        method: "POST",
        url: '/esbuilding/public/common/user/login',
        headers: {
            userName: "admin",
            passWord: "admin"
        }
    }).then()

};
export default logins