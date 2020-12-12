import VueRouter from 'vue-router'
import Report from '../components/Report'
import NotFound from '../components/NotFound'
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
            path: '/project/:projectId/calculator',
            name: 'CalculatorForm',
            component: CalculatorForm,
            props: true,
        },
        {
            path: '/report/:reportId',
            name: 'Report',
            component: Report,
            props: true,
        },
        {
            path: '*',
            component: NotFound,
        }
    ],
})
