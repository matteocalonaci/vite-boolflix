import { reactive } from 'vue';

const iMieiDati = reactive({
    searchString: "",
    moviesUrl: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    movies:[],
    seriesUrl:'https://api.themoviedb.org/3/trending/tv/day?language=it-IT',
    series:[],
    urlImage: "https://image.tmdb.org/t/p/w1280",

  

});
export default iMieiDati;


