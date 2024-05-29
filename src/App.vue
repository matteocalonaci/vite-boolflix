<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import FilmCard from './components/FilmCard.vue';

import store from './data/store.js';
import axios from "axios";
export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    FilmCard,
    store

  },

  data() {
    return {
      store,

    }

  },

  methods: {



  },

  created() {

    // CHIAMATA X CARD
    // axios
    //   .get(this.cardUrl)
    //   .then((risultato) => {
    //     this.store.cards = risultato.data.data;
    //     console.log(risultato.data.result)

    //   });

  },




}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
