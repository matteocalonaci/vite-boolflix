<script>
import store from '../data/store.js';

export default {
    name: "FilmCard",
    props: {

    },
    data() {
        return {

        }
    }
}
</script>
<template>
    <div class="card col-2 myBg">
        <div class="img bg-warning">
            <img src="">
        </div>
        <h5 class=" text-center text-white p-2">{{ }}</h5>
        <p class=" text-center text-white p-2">{{ }}</p>

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
    background-color: orange;
    /* background-color: rgb(212, 143, 56); */
}
</style>