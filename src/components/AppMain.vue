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
        axios.get(this.store.urlAPI).then(r => {
            this.store.loading = true
            console.log(r)
            this.store.films = [];
            this.store.films = r.data.results
            this.store.loading = false
            console.log(this.store.films)
        })
    }
}

</script>

<template>
    <div class="container-fluid bg-secondary">
        <div class="container">
            <div class="row flex-wrap fixSize">
                <div class="col-2 bg-light">
                    <h3>{{ this.store.films }}</h3>
                    <h4>Titolo Originale</h4>
                    <h6>Lingua</h6>
                    <h5>Voto</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fixSize {
    height: calc(100vh - 60px);
}
</style>