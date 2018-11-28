import Vue from 'vue';
import Router from 'vue-router';

    
import _15434041184409d49a922ebc8a6d77ca82c0a74289b98 from '@/pages/Appshell.vue';
    

    
import _15434041184403d4a9c0c3be1ea736a5b51bf5fe1d975 from '@/pages/Box.vue';
    

    
import _154340411844057cfb9079795a00f9d948b3a883d0eb4 from '@/pages/box/test.vue';
    

    
import _1543404118440f7fc7554d202a317883db2ae067316d3 from '@/pages/detail/_id.vue';
    

    
import _1543404118440d2462dcf0c7beccd286c658e08187914 from '@/pages/Error.vue';
    

    
import _154340411844067830448037326425509e44bce7632b7 from '@/pages/Index.vue';
    


let routes = [
    {
        "path": "/appshell",
        "component": _15434041184409d49a922ebc8a6d77ca82c0a74289b98,
        "meta": {},
        "name": "appshell"
    },
    {
        "path": "/box",
        "component": _15434041184403d4a9c0c3be1ea736a5b51bf5fe1d975,
        "meta": {},
        "name": "box",
        "children": [
            {
                "path": "test",
                "component": _154340411844057cfb9079795a00f9d948b3a883d0eb4,
                "meta": {},
                "name": "boxTest"
            }
        ]
    },
    {
        "path": "/detail/:id",
        "component": _1543404118440f7fc7554d202a317883db2ae067316d3,
        "meta": {},
        "name": "detailId"
    },
    {
        "path": "/",
        "component": _154340411844067830448037326425509e44bce7632b7,
        "meta": {},
        "name": "index"
    },
    {
        "path": "/error",
        "component": _1543404118440d2462dcf0c7beccd286c658e08187914,
        "meta": {},
        "name": "error",
        "alias": "*"
    }
];

Vue.use(Router);




const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    } else {
        const position = {};
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position;
    }
};



export const keepAlivePages = routes.filter(route => route.keepAlive || route.meta.keepAlive)
                            .map(route => route.name);

export function createRouter() {
    let router = new Router({
        mode: 'history',
        base: '/',
        scrollBehavior,
        routes
    });



    

    router.beforeEach((to, from, next) => {
        if (router.app.$store) {
            if (router.app.$store.state.pageTransition.enable) {
                
                let effect = 'fade';
                
                router.app.$store.commit('pageTransition/setType', 'fade');
                router.app.$store.commit('pageTransition/setEffect', effect);
            }
        }
        next();
    });


    return router;
}
