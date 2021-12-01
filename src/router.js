import Vue from 'vue'
import Router from 'vue-router'
import fullLayout from "./components/fullLayout";
import landing from "./components/landing/landing";
import unlock from "./components/operations/unlock";
import reset from "./components/operations/reset";

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: fullLayout,
            children: [
                {
                    path: '',
                    component: landing
                },
                {
                    path: 'unlock',
                    component: unlock
                },
                {
                    path: 'reinitialize',
                    component: reset
                }
            ]
        },
    ]
});

Vue.use(Router);

export default router