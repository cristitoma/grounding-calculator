import Router from 'vue-router'
import CalculatorForm from '../components/CalculatorForm'
import CreateProjectForm from "../components/CreateProjectForm";
import Vue from 'vue'

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'CreateProjectForm',
            component: CreateProjectForm,
        },
        {
            path: '/calculator',
            name: 'CalculatorForm',
            component: CalculatorForm,
        },
    ],
})
