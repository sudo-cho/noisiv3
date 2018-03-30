import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Xtra from '@/components/Xtra'
import Me from '@/components/Me'
import Work from '@/components/Work'
import Menu from '@/components/Menu'

import vuescroll from 'vue-scroll'

Vue.use(vuescroll)
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {path: '/projects', component: Projects, name: 'Projects'},
                {path: '/xtra', component: Xtra, name: 'Xtra'},
                {path: '/me', component: Me, name: 'Me'},
                {path: '/menu', component: Menu, name: 'Menu'}
            ]
        },
        {
            path: '/:projectname',
            component: Work,
            name: 'Work'
        }
    ]
})
