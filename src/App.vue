<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from '../src/components/data/store';
import axios from 'axios';

export default {
  components: {

    AppHeader,
    AppMain

  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped></style>
