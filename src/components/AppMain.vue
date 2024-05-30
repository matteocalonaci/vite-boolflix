<!-- JS -->
<script>
import FilmCard from "./FilmCard.vue";
import TvCard from "./TvCard.vue";

import store from '../data/store.js';




export default {
    name: "AppMain",
    components: {
        FilmCard,
        TvCard
    },

    data() {
        return {
            store
        }

    },



}
</script>

<template>
    <div class="container bg-white p-5">

        <div class="container">
            <div class="row d-flex justify-content-between min-height ">
                <FilmCard v-for="movie in store.movies" :movie="movie" />
                <TvCard v-for="serie in store.series" :serie="serie" />


            </div>
        </div>
    </div>
</template>

<!-- CSS -->
<style scoped></style>