<!-- JS -->
<script>
import FilmCard from "./FilmCard.vue";
import store from '../data/store.js';




export default {
    name: "AppMain",
    components: {
        FilmCard
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


            </div>
        </div>
    </div>
</template>

<!-- CSS -->
<style scoped></style>