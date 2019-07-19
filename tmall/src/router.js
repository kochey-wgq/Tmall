import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index.vue";
import IndexSeo from "./views/indexSeo";
import Signin from "./views/signin";
import UserTarget from "./views/userTarget";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path:'/index/index-seo',
      name:'IndexSeo',
      component:IndexSeo
    },
    {
      path:'/index/signin',
      name:'Signin',
      component:Signin
    },
    {
      path:'/index/signin/user-target',
      name:'UserTarget',
      component:UserTarget
    },
    {
      path: '*',
      redirect : '/index'
    }
  ]
});
