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
    <div class="container-fluid bg-secondary">
        <div class="container scrollBar bg-light bg-dark fixSize">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-danger h50">Films</h2>
                </div>
            </div>
            <div>
                <v-hover v-slot="{ isHovering, props }">
                    <v-card class="mx-auto" color="grey-lighten-4" max-width="600" v-bind="props">
                        <v-img :aspect-ratio="16 / 9" cover src="https://cdn.vuetifyjs.com/images/cards/kitchen.png">
                            <v-expand-transition>
                                <div v-if="isHovering"
                                class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
                                style="height: 100%;">
                                $14.99
                            </div>
                        </v-expand-transition>
                    </v-img>

                    <v-card-text class="pt-6">
                        <div class="font-weight-light text-grey text-h6 mb-2">
                            For the perfect meal
                        </div>

                        <h3 class="text-h4 font-weight-light text-orange mb-2">
                            QW cooking utensils
                        </h3>

                        <div class="font-weight-light text-h6 mb-2">
                                Our Vintage kitchen utensils delight any chef.<br>
                                Made of bamboo by hand
                            </div>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </div>
            <!-- <div class="row flex-nowrap altezza100">
                                <div class="col-2 bg-light border-start border-end p-0" v-for="(film, c) in store.films">
                                    <img :src="store.imgFilm + film.backdrop_path" alt="" class="cover">
                                    <h4>{{ film.title }}</h4>
                                    <h5 class="tronca">{{ film.original_title }}</h5>
                                    <img :src="`https://flagcdn.com/16x12/${film.original_language}.png`" alt="" class="flags">
                                    <h6>Stelle:
                                        <template v-for="i in stelle">
                                            <template v-if="Math.ceil(film.vote_average / 2) >= i">
                                                <span>&#9733;</span>
                                            </template>
                                            <template v-else>
                                                <span>&#9734;</span>
                                            </template>
                                        </template>
                                    </h6>
                                </div>
                            </div> -->
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
    width: 100%
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