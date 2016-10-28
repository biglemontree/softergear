import Vue from 'vue';
import VueRouter from 'vue-router';
//引入组件
import App from './app.vue';
import tab from './components/tab.vue';
import tabContent from './components/tab-content.vue';
import tabItem from './components/tabItem.vue';
Vue.use(VueRouter);
var app = Vue.extend(App);
var router = new VueRouter();
//配置路由
router.map({
    '/': {
        component: App
    },
    '/index': {
        component: tabContent,
        subRoutes:{
            '/tabItem/:userId':{
                component(resolve){
                    require(['./components/tabItem'],resolve)
                }
            },
            '/': {
                component(resolve) {
                    require(['./components/tabItem'], resolve)
                }
            },
        }
    },
    '/tabItem/:userId':{
        name:'user',
        // component:tabItem
        component(resolve){
            require(['./components/tabItem'],resolve)
        }
    },
    '/index/tabItem/:userId':{
        name:'user1',
        // component:tabItem
        component(resolve){
            require(['./components/tabItem'],resolve)
        }
    },
});
//设置默认情况下打开的页面
router.redirect({
    '/': 'index'
});
router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    if (toPath.replace(/[^/]/g, '').length > 1) {
        router.app.isIndex = false
    }
    else {
        let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
        router.app.isIndex = depath ? 0 : 1
    }
    next()//调用过度动画
});

router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`);
    // return router;
})
router.start(app, '#mainSoftwareCenter');
//暴露路由接口调试
window.router = router;
