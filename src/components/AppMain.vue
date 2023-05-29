<script>

import AppFilm from './AppFilm.vue'
import AppSerie from './AppSerie.vue'

export default {
    components: {

        AppFilm,
        AppSerie

    }
}
</script>

<template>
    <div class="container-fluid bg_grey">
        <div class="row">
            <div class="col-12">
                <AppFilm />
                <AppSerie />
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg_grey {
    background-color: grey;
}
</style>