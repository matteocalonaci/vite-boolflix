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
        getConsole() {
            console.log("cercato:", this.store.searchString);
        },


        getMovies() {
            const options = {
                method: 'GET',
                url: this.store.moviesUrl,
                params: { query: this.store.searchString, language: 'it-IT' },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q6wbynsfQ1ymE7tj6s-Xy0Y6eHrhIlAdJxh3q5Uw7To'
                }
            };
            axios
                .request(options)
                .then((response) => {
                    console.log(response.data.results);
                    this.store.movies = response.data.results
                    console.log("lista film", this.store.movies)
                })
                .catch(function (error) {
                    console.error(error);
                });
        },

        getSeries() {
            this.store.serieTv = "Serie TV Trovate";
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
                    console.log(response.data.results);
                    this.store.series = response.data.results
                    console.log("lista serie tv", this.store.series)
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
                <div class="col-5 d-flex align-items-center justify-content-center px-5 ">
                    <span class="text-white p-2" @click="getMovies()"> Movies</span>
                    <span class="text-white p-2" @click=" getSeries()"> Series</span>
                </div>
                <div class="col-6 d-flex justify-content-end align-items-center">
                    <input type="text" v-model="this.store.searchString" placeholder="Cosa vuoi vedere oggi?">
                    <button @click="getMovies(), getConsole()">Search</button>

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

input {
    border-radius: 0.5rem;
    padding: 0.2rem;
    border: 0.1rem solid white;
    margin-right: 0.2rem;
}

button {
    border-radius: 0.5rem;
    padding: 0.2rem;
    background-color: red;
    border: 0.1rem solid red;
    color: rgba(0, 0, 0, 0.6);

}
</style>