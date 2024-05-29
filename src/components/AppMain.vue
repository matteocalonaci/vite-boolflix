<!-- JS -->
<script>
import FilmCard from "./FilmCard.vue";



export default {
    name: "AppMain",
    components: {
        FilmCard
    },

    data() {
        return {

        }

    },



}
</script>

<template>
    <div class="container bg-white p-5">

        <div class="container">
            <div class="row d-flex justify-content-between min-height ">
                <FilmCard />


            </div>
        </div>
    </div>
</template>

<!-- CSS -->
<style scoped></style>