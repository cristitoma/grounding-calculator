<template>
  <div class="app container-fluid">
    <router-view :fields="getFields()" :calculator-fields="getCalculatorFields()"/>
  </div>
</template>

<script>
  import CalculateRequest from "../../../Interface/Request/CalculateRequest";
  import CreateProjectForm from "~/Infrastructure/UI/Vue/components/CreateProjectForm";
  import CreateProjectRequest from "~/Interface/Request/CreateProjectRequest";
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import CalculatorForm from "./components/CalculatorForm";
  import router from './router';
  import Vue from 'vue';
  import VueRouter from 'vue-router';

  Vue.use(VueRouter);

  export default {
    name: 'app',
    components: {
      CalculatorForm,
      CreateProjectForm,
      router
    },
    methods: {
      getFields() {
        const fields = CreateProjectRequest.getFieldsType();
        return fields;
      },
      getCalculatorFields() {
        const fields = CalculateRequest.getFieldsType();
        return fields;
      }
    }
  }
</script>

<style>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    overflow: hidden;
  }
  .app.container-fluid {
    max-width: 1400px;
  }
</style>
