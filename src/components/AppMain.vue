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
    <div class="color">
        <div class="container p-5">

            <div class="container">
                <div class="row d-flex justify-content-between min-height ">
                    <FilmCard v-for="movie in store.movies" :movie="movie" />
                    <TvCard v-for="serie in store.series" :serie="serie" />


                </div>
            </div>
        </div>
    </div>
</template>

<!-- CSS -->
<style scoped>
.color {
    background-color: rgba(0, 0, 0, 0.900);
    min-height: calc(100vh - 5rem)
}
</style>