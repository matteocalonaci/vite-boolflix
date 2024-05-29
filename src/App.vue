<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import store from './data/store.js';
import axios from "axios";
export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    store

  },

  data() {
    return {


    }

  },

  methods: {


  },

  created() {



  },




}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
