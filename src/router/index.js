import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MyHeader from '@/components/MyHeader'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            children: [
                { path: '/droom', component: Project, name: 'Droom'},
                { path: '/thesaltfactory', component: Project, name: 'The Salt Factory'},
                { path: '/148', component: Project, name: 'Refonte 148'},
                { path: '/', component: Project, name: 'Droom'}
            ]
        }
    ]
})
