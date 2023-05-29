<script>

import { store } from './data/store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            stelle: 5,
        }
    },
    mounted() {
        axios.get(this.store.apiUrl_tv + "a").then(r => {
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
            <div class="row">
                <div class="col-12">
                    <h2 class="text-danger h50">Films</h2>
                </div>
            </div>
            <div class="row flex-nowrap altezza100">
                <div class="col-2 bg-light  border-start border-end p-0" v-for="(serie, c) in store.series">
                    <img :src="store.imgFilm + serie.backdrop_path" alt="" class="cover">
                    <h4>{{ serie.name }}</h4>
                    <h5 class="tronca">{{ serie.original_name }}</h5>
                    <img :src="`https://flagcdn.com/16x12/${serie.original_language}.png`" alt="" class="flags">
                    <h6>Stelle:
                        <template v-for="i in stelle">
                            <template v-if="Math.ceil(serie.vote_average / 2) >= i">
                                <span>&#9733;</span>

                            </template>
                            <template v-else>
                                <span>&#9734;</span>
                            </template>
                        </template>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fixSize {
    height: calc(50vh - 30px);
}

.h50 {
    height: 50px;
}

.altezza100 {
    height: calc(100% - 50px);
}

.cover {
    width: 100%;
    /* height: 100%;
    object-fit: cover; */
}

.flags {
    width: 20px;
}

.scrollBar {
    overflow-x: auto;
    overflow-y: hidden;
}

.tronca {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}
</style>