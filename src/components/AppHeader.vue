<script>
import { store } from './data/store';
import axios from 'axios';

export default {
  data() {
    return {
      store,
      filmScelto: null,
    }
  },
  methods: {
    cercaFilm() {
      let indirizzo = this.store.apiUrl + this.filmScelto;

      this.inserisciTitolo(indirizzo)
    },

    inserisciTitolo(indirizzo) {

      axios.get(indirizzo).then(r => {
        this.store.films = [];
        this.store.films = r.data.results;
        console.log(r.data.results)

      });
    }
  }
}

</script>

<template>
  <div class="container-fluid">
    <div class="row bg-dark align-items-center fixSize">
      <div class="col-4">
        <h1 class="text-danger">Netflix</h1>
      </div>
      <div class="col-8">
        <input class="form-control" type="search" placeholder="Cerca uno spettacolo" @keyup="cercaFilm"
          v-model="filmScelto">
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixSize {
  height: 60px;
}
</style>
