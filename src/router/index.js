import Vue from 'vue';
import Router from 'vue-router';

// 引入页面
import Home from '../views/home.vue';
import Index from '../views/index.vue';
import Product from '../views/product.vue';
import Detail from '../views/detail.vue';
import Cart from '../views/cart.vue';


Vue.use(Router)

export default new Router({
    routes:[
        // / 根页面 
        // /index 为首页
        // /product/:id 为产品栈展示页面
        // /detail/:id 为产品详情展示页面
        // 这个结构是因为我们设计的展示页面结构为:
        /**
         * <nav-header />
         * <router-view></router-view>
         * <nav-footer />
         */
        // 其中根页面是主要的承载和跳转页面，者三个页面是由跳转例的
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect:'/index',
            children:[
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        // 购物车
        // {
        //     path: '/cart',
        //     name: 'cart',
        //     component: Cart, 
        // }
    ]
})