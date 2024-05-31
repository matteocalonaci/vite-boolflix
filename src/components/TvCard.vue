<script>
import store from '../data/store.js';

export default {
    name: "TvCard",
    props: ["serie"],
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <div class="card col-2 myBg{
    opacity: 0;
}">
        <div class="img bg-warning">
            <img :src='store.urlImage + serie.backdrop_path'>
        </div>
        <h5 class=" text-center text-white p-2">Titolo: {{ serie.name }}</h5>
        <h5 class=" text-center text-white p-2">Titolo Originale:{{ serie.name }}</h5>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="serie.original_language == 'en'">
            <img src="../assets/usa.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="serie.original_language == 'pl'">
            <img src="../assets/pl.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="serie.original_language == 'zh'">
            <img src="../assets/zh.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="serie.original_language == 'ko'">
            <img src="../assets/ko.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="serie.original_language == 'ja'">
            <img src="../assets/ja.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-dark" v-if="serie.original_language == 'pt'">
            <img src="../assets/pt.svg" class="w-25" alt="">
        </p>
        <p class="card-text my-fs py-2s text-center text-white">
            Voti: {{ (serie.vote_average / 2).toFixed(1) }}
            <!-- AGGIUNTA STELLE IN BASE AL VOTO E DIVISO PER 2 -->
        <div class="text-center mb-1">
            <span v-if="(serie.vote_average / 2) >= 1">
                <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
            </span>
            <span v-if="(serie.vote_average / 2) >= 2">
                <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
            </span>
            <span v-if="(serie.vote_average / 2) >= 3">
                <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
            </span>
            <span v-if="(serie.vote_average / 2) >= 4">
                <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
            </span>
            <span v-if="(serie.vote_average / 2) >= 5">
                <i class="fa-solid fa-star" style="color: rgb(255, 212, 59);"></i>
            </span>
        </div>
        </p>
    </div>
</template>

<!-- CSS -->
<style scoped>
.col-2 {
    width: calc((100% - 5rem) / 5);
    margin-bottom: 1rem;
    padding: 0.0001rem 0;
    background-color: rgba(0, 0, 0, 0.200);


}

.card:hover {
    opacity: 90;
    background-color: rgba(255, 192, 203, 0.082);
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