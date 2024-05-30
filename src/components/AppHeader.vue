<script>
import store from '../data/store.js';
import axios from "axios";


export default {
    name: "AppHeader",

    data() {
        return {
            store,

        }
    },
    methods: {
        // getFilmConsole() {
        //     console.log("cercato:", this.searchString);
        // },
        getMovies() {
            this.store.moviesInput = "film";
            const options = {
                method: 'GET',
                url: this.store.moviesUrl,
                params: { query: this.store.searchString, language: 'it-IT', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q6wbynsfQ1ymE7tj6s-Xy0Y6eHrhIlAdJxh3q5Uw7To'
                }
            };
            axios
            axios
                .request(options)
                .then((response) => {
                    console.log("film", response.data.results);
                    this.store.movies = response.data.results
                    console.log(this.store.movies)
                    console.log(options)
                })
                .catch(function (error) {
                    console.error(error);
                });
        },

        getSeries() {
            this.store.seriesInput = "series";
            const options = {
                method: 'GET',
                url: this.store.seriesUrl,
                params: { query: this.store.searchString, include_adult: 'true', language: 'it-IT', page: '1' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q6wbynsfQ1ymE7tj6s-Xy0Y6eHrhIlAdJxh3q5Uw7To'
                }
            };

            axios
                .request(options)
                .then((response) => {
                    console.log("serie", response.data.results);
                    this.store.series = response.data.results
                    console.log(this.store.series)
                    console.log(options)
                })
                .catch(function (error) {
                    console.error(error);
                });



            this.store.searchString = ""
        },

    },

}
</script>
<template>
    <header class="bg-black d-flex align-items-center">
        <div class="container">
            <div class="row ">
                <div class="col-1 ">
                    <img src="../assets/Netflix-logo.jpg" alt="logo">
                </div>
                <div class="col-1"></div>
                <div class="col-10 d-flex justify-content-end align-items-center">
                    <input type="text" v-model="this.store.searchString" placeholder="Cosa vuoi vedere oggi?">
                    <button @click="getMovies(), getSeries()">SEARCH</button>

                </div>
            </div>
        </div>
    </header>
</template>

<!-- CSS -->
<style scoped>
header {
    height: 5rem;
}

img {
    width: 10rem;
}
</style>