<script>

import { store } from './data/store';
import axios from 'axios';

export default {
    data() {
        return {
            store
        }
    },
    mounted() {
        axios.get(this.store.apiUrl).then(r => {
            this.store.loading = true
            this.store.films = [];
            this.store.films = r.data.results
            console.log(this.store.films)
            this.store.loading = false
        })
    }
}

</script>

<template>
    <div class="container-fluid bg-secondary">
        <div class="container scrollBar bg-light">
            <div class="row flex-wrap fixSize">
                <div class="col-2 bg-light card" v-for="(film, c) in store.films">
                    <h3>{{ film.title }}</h3>
                    <img :src="store.imgFilm + film.backdrop_path" alt="">
                    <h4>{{ film.original_title }}</h4>
                    <h6>{{ film.original_language }}</h6>
                    <h5>{{ film.vote_average }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fixSize {
    height: calc(100vh - 60px);
}

.card {
    border: solid 1px;
}

img {
    width: 100%;
}

.scrollBar {
    overflow-y: auto;
}
</style>