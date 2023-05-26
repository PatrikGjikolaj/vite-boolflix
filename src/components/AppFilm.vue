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
        <div class="container scrollBar bg-light bg-dark fixSize">
            <h1 class="text-danger">Films</h1>
            <div class="row flex-nowrap">
                <div class="col-2 bg-light card" v-for="(film, c) in store.films">
                    <img :src="store.imgFilm + film.backdrop_path" alt="">
                    <h4>{{ film.title }}</h4>
                    <h5 class="tronca">{{ film.original_title }}</h5>
                    <h6>{{ film.original_language }}</h6>
                    <h6>{{ film.vote_average }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fixSize {
    height: calc(50vh - 30px);
}

.card {
    border: solid 1px;
}

img {
    width: 100%;
}

.scrollBar {
    overflow-x: auto;
}

.tronca {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%
}
</style>