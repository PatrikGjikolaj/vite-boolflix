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
        axios.get(this.store.apiUrl_tv).then(r => {
            this.store.loading = true
            this.store.series = [];
            this.store.series = r.data.results
            console.log(this.store.series)
            this.store.loading = false
        })
    }
}

</script>

<template>
    <div class="container-fluid bg-secondary">
        <div class="container scrollBar bg-light bg-dark fixSize">
            <h1 class="text-danger">Series</h1>
            <div class="row flex-nowrap">
                <div class="col-2 bg-light card" v-for="(serie, c) in store.series">
                    <img :src="store.imgFilm + serie.backdrop_path" alt="">
                    <h4>{{ serie.name }}</h4>
                    <h5 class="tronca">{{ serie.original_name }}</h5>
                    <h6>{{ serie.original_language }}</h6>
                    <h6>{{ serie.vote_average }}</h6>
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
    width: 100%;
}
</style>