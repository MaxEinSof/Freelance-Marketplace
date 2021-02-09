<template>
    <TheNavbar/>

    <div class="container with-nav">
        <router-view/>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { mapActions, useStore } from 'vuex';
import TheNavbar from './components/TheNavbar';

export default {
    // mounted() {                          // Options API
    //     this.loadTasks();
    // },
    // methods: mapActions(['loadTasks']),

    setup() {                               // Composition API
        const store = useStore();

        onMounted(() => store.dispatch('loadTasks'));
    },

    components: {TheNavbar},
}
</script>
