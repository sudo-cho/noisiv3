import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Xtra from '@/components/Xtra'
import Me from '@/components/Me'
import Work from '@/components/Work'

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
                {path: '/me', component: Me, name: 'Me'}
            ]
        },
        {
            path: '/project',
            component: Work,
            name: 'Work'
        }
    ]
})
