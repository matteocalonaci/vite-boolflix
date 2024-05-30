<script>
import store from '../data/store.js';

export default {
    name: "FilmCard",
    props: ["movie"],
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="card col-2 myBg">
        <div class="img bg-warning">
            <img :src='store.urlImage + movie.backdrop_path'>
        </div>
        <h5 class=" text-center text-white p-2">Titolo:{{ movie.title }}</h5>
        <h5 class=" text-center text-white p-2">Titolo Originale:{{ movie.original_title }}</h5>
        <p class=" text-center text-white p-2">Lingua:{{ movie.original_language }}</p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="movie.original_language == 'en'">
            <img src="../assets/usa.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="movie.original_language == 'pl'">
            <img src="../assets/pl.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="movie.original_language == 'zh'">
            <img src="../assets/zh.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="movie.original_language == 'ko'">
            <img src="../assets/ko.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="movie.original_language == 'ja'">
            <img src="../assets/ja.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="movie.original_language == 'pt'">
            <img src="../assets/pt.svg" class="w-25" alt="">
        </p>
        <p class=" text-center text-white p-2">Voto:{{ movie.vote_average }}</p>
    </div>
</template>

<!-- CSS -->
<style scoped>
.col-2 {
    width: calc((100% - 5rem) / 5);
    margin-bottom: 1rem;
    padding: 0.0001rem 0;
}

.col-2 img {
    height: 100%;
    width: 100%;

}

.myBg {
    background-color: rgba(0, 0, 0, 0.200);
}

h5 {
    font-size: 1rem;
}
</style>