<template>
    <the-navbar></the-navbar>

    <div class="container with-nav">
        <router-view/>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import TheNavbar from './components/TheNavbar';

export default {
    mounted() {
        this.loadTasks();
    },
    methods: mapActions(['loadTasks']),
    components: {TheNavbar},
}
</script>
