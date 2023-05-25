import { reactive } from "vue";

export const store = reactive({
    loading: true,
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=5c25232faab1c5179701ebf291d09238&query=all",
    films: [],
});
