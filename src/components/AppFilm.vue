<script>

import { store } from './data/store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            stelle: 5
        }
    },
    mounted() {
        axios.get(this.store.apiUrl + "a").then(r => {
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
    <!-- <div class="container-fluid bg_grey"> -->
    <div class="container-fluid bg-dark fixSize d-flex p-0">
        <div class="row bg-dark align-items-center fix">
            <div class="col-12 p-3 l_50">
                <h2 class="text-danger vert">Films</h2>
            </div>
        </div>
        <div class="row flex-nowrap altezza1 scrollBar">
            <div class="col-2 bg-light border-end p-0" v-for="(film, c) in store.films">
                <v-hover v-slot="{ isHovering, props }">
                    <v-card color="grey-lighten-4" v-bind="props" class="altezza1">
                        <v-img :src="store.imgFilm + film.backdrop_path" alt="" cover class="altezza1">
                            <v-expand-transition>
                                <div v-if="isHovering"
                                    class="transition-fast-in-fast-out bg-grey-darken-2 v-card--reveal text-h2 altezza1 p-1">
                                    <h4>{{ film.title }}</h4>
                                    <h5 class="tronca">{{ film.original_title }}</h5>
                                    <img :src="`https://flagcdn.com/16x12/${film.original_language}.png`" alt=""
                                        class="flags">
                                    <h6>Stelle:
                                        <template v-for="i in stelle">
                                            <template v-if="Math.ceil(film.vote_average / 2) >= i">
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
    <!-- </div> -->
</template>

<style scoped>
.fixSize {
    height: calc(50vh - 30px);
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
    overflow-y: hidden;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background-color: #dc3545;
}

::-webkit-scrollbar-thumb {
    background-image: linear-gradient(180deg, #212529 40%, #dc3545 60%, #212529 40%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
    border-radius: 100px;
}

.tronca {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%
}

.altezza1 {
    height: 100%;
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