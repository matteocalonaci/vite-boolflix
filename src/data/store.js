import { reactive } from 'vue';

const iMieiDati = reactive({
    searchString: "",
    moviesUrl: "https://api.themoviedb.org/3/search/movie?api_key=cd9bb08e609470850f56a739b3e6641f&query=",
    movies:[],
    seriesUrl:"https://api.themoviedb.org/3/search/tv?api_key=cd9bb08e609470850f56a739b3e6641f&language=it_IT&query=",
    series:[],
    urlImage: "https://image.tmdb.org/t/p/w1280",

  

});
export default iMieiDati;

