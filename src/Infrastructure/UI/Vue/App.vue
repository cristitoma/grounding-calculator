<template>
  <div class="app">
    <create-project-form :fields="getFields()"/>
  </div>
</template>

<script>
  import CreateProjectForm from "~/Infrastructure/UI/Vue/components/CreateProjectForm";
  import CreateProjectRequest from "~/Interface/Request/CreateProjectRequest";
  
  export default {
    name: 'app',
    components: {
      CreateProjectForm
    },
    methods: {
      getFields() {
        const fields = CreateProjectRequest.getFieldsType();
        console.log(fields);
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
  }
</style>
