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
    <div class="container-fluid bg-dark fixSize d-flex p-0">
        <div class="row bg-dark align-items-center fix">
            <div class="col-12 l_50">
                <h2 class="text-danger vert">Series</h2>
            </div>
        </div>
        <div class="row flex-nowrap altezza1 scrollBar">
            <div class="col-2 bg-light border-end p-0" v-for="(serie, c) in store.series">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card color="grey-lighten-4" v-bind="props" class="altezza2">
                        <v-img :src="store.imgFilm + serie.poster_path" alt="" cover class="altezza1">
                            <v-expand-transition>
                                <div v-if="isHovering"
                                    class="transition-fast-in-fast-out bg-grey-darken-2 v-card--reveal altezza1 p-1 scrolly">
                                    <h5>Titolo: {{ serie.name }}</h5>
                                    <h6 class="tronca">Titolo originale: {{ serie.original_name }}</h6>
                                    <p>Descrizione: {{ serie.overview }}</p>
                                    <img :src="`https://www.countryflagicons.com/FLAT/64/${serie.original_language}.png`"
                                        alt="" class="flags">
                                    <h6>Stelle:
                                        <template v-for="i in stelle">
                                            <template v-if="Math.ceil(serie.vote_average / 2) >= i">
                                                <span class="text-warning">&#9733;</span>
                                            </template>
                                            <template v-else>
                                                <span>&#9734;</span>
                                            </template>
                                        </template>
                                    </h6>
                                </div>
                            </v-expand-transition>
                        </v-img>
                    </v-card>
                </v-hover>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fixSize {
    height: calc(50vh - 30px);
}

.scrolly {
    overflow-y: auto;
}

.vert {
    writing-mode: vertical-lr;
    rotate: 180deg;
}

.l_50 {
    width: 100px;
}


.flags {
    width: 20px;
}

.scrollBar {
    overflow-x: auto;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    /* background-color: #dc3545; */
    background-image: linear-gradient(#212529 100%, #dc3545 0%);
}

::-webkit-scrollbar-thumb {
    background-image: linear-gradient(#dc3545 100%, #212529 0%);
    border-radius: 100%;
}

.tronca {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}

.altezza1 {
    height: 100%;
}

.altezza2 {
    height: 100%;
    width: calc(95vw / 6);
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
}
</style>