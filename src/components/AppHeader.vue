<script>
import store from '../data/store.js';
import axios from "axios";


export default {
    name: "AppHeader",

    data() {
        return {
            searchString: "",
            cardUrl: 'https://api.themoviedb.org/3/person/popular?language=it-IT&page=1',
        }
    },
    methods: {
        getFilmConsole() {
            console.log("cercato:", this.searchString);
        },



        // getMovies() {
        //     const axios = require('axios');

        //     const options = {
        //         method: 'GET',
        //         url: 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
        //         headers: {
        //             accept: 'application/json',
        //             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjg4MDczYmU2MTY5YTE0Y2JmMjkxMTRiOGJkMzI3MCIsInN1YiI6IjY2NTcyYzkyYmZhYjg0OTg3ODU5OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q6wbynsfQ1ymE7tj6s-Xy0Y6eHrhIlAdJxh3q5Uw7To'
        //         }
        //     };

        //     axios
        //         .request(options)
        //         .then(function (response) {
        //             console.log(response.data);
        //         })
        //         .catch(function (error) {
        //             console.error(error);
        //         });

        // },
    },
    created() {
        // CHIAMATA X CARD
        axios
            .get(this.cardUrl)
            .then((risultato) => {
                this.store.movies = risultato.data.data;
                console.log(risultato.data.result)

            });
    }
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
                    <input type="text" v-model="searchString" placeholder="Cosa vuoi vedere oggi?">
                    <button @click="getFilmConsole">SEARCH</button>

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