import VueRouter from 'vue-router'
import CalculatorForm from '../components/CalculatorForm'
import CreateProjectForm from "../components/CreateProjectForm";
import Vue from 'vue'

Vue.use(VueRouter);
export default new VueRouter({
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
