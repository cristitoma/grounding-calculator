<template>
  <div class="app container-fluid">
    <router-view/>
  </div>
</template>

<script>
  import 'bootstrap';
  import router from './router';
  import Vue from 'vue';
  import VueRouter from 'vue-router';

  Vue.use(VueRouter);

  export default {
    name: 'app',
    router,
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

  @import '~bootstrap/dist/css/bootstrap.min.css';
</style>
