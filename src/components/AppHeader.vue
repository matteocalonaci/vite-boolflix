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

        searchButton() {
            axios.get(this.store.moviesUrl + this.store.searchString).then(result => {

                this.store.movies = result.data.results
                console.log("Movies")
            });

            axios.get(this.store.series + this.store.searchString).then(result => {

                this.store.serieFilm = result.data.results
                console.log("Series")
            });
            this.store.searchString = ""
        }
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
                    <span class="text-white p-2" @click=""> Movies</span>
                    <span class="text-white p-2" @click=""> Series</span>
                </div>
                <div class="col-6 d-flex justify-content-end align-items-center">
                    <input @keyup.enter="searchButton" type="text" v-model="this.store.searchString"
                        placeholder="Cosa vuoi vedere oggi?">
                    <button @click=searchButton>Search</button>

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