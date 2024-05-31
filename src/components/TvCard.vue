<script>
import store from '../data/store.js';

export default {
    name: "TvCard",
    props: ["serie"],
    data() {
        return {
            store
        }
    },

    methods: {
        getImgUrl(path) {
            return this.store.urlImage + path;
        },

        getVote(vote) {
            let newVote = vote / 2;
            newVote = newVote = Math.round(newVote);
            return newVote
        },

        getStars(vote, nStella) {
            let newVote = this.getVote(vote);
            let classe = " fa-regular fa-star";
            if (newVote >= nStella) {
                classe = "fa fa-star"
            }
            return classe
        }
    }
}

</script>
<template>
    <div class="card col-2 myBg">
        <div class="img bg-warning">
            <img :src='getImgUrl(serie.poster_path)'>
            <div class="info p-4">
                <h5 class=" text-center text-white p-2">Titolo:{{ serie.name }}</h5>
                <h5 class=" text-center text-white p-2">Titolo Originale:{{ serie.name }}</h5>
                <p class=" text-center text-white p-2">Lingua:{{ serie.original_language }}</p>
                <p class="card-text my-fs py-2s text-center" v-if="serie.original_language == 'en'">
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
                    Voti: {{ getVote(serie.vote_average) }}
                    <!-- AGGIUNTA STELLE IN BASE AL VOTO E DIVISO PER 2 -->
                <div class="text-center mb-1">
                    <i :class="getStars(serie.vote_average, 1)" class="starColor"></i>
                    <i :class="getStars(serie.vote_average, 2)" class="starColor"></i>
                    <i :class="getStars(serie.vote_average, 3)" class="starColor"></i>
                    <i :class="getStars(serie.vote_average, 4)" class="starColor"></i>
                    <i :class="getStars(serie.vote_average, 5)" class="starColor"></i>

                </div>
                </p>
            </div>
        </div>
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

.info {
    position: absolute;
    top: 0;
    opacity: 0;
    height: 21.3rem;
}

.info:hover {

    display: block;
    opacity: 100;
    background-color: rgba(0, 0, 0, 0.500);
}

.starColor {
    color: #FFD43B;
}
</style>