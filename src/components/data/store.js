import { reactive } from "vue";

export const store = reactive({
    loading: true,
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=37c8db7e9d59b35da2b1d4152b24799f&false&language=it-IT&query=",
    apiUrl_tv: "https://api.themoviedb.org/3/search/tv?api_key=37c8db7e9d59b35da2b1d4152b24799f&false&language=it-IT&query=",
    films: [],
    series: [],
    imgFilm: "https://image.tmdb.org/t/p/w342",
});

