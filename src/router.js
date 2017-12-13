const routers = [
    {
        path: '/home',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/add',
        meta: {
            title: '添加'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/',
        redirect:'/home'
    }
];
export default routers;