<template>
    <h1 class="text-white center"
        v-if="!tasks.length"
    >Задач пока нет</h1>

    <template v-else>
        <h3 class="text-white">Всего активных задач: {{ totalActiveTasks }}</h3>

        <AppTask
            v-for="task in tasks"
            :key="task.id"
            :id="task.id"
            :title="task.title"
            :date="task.date"
            :status="task.status"
        />
    </template>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AppTask from "../components/AppTask";

export default {
    //computed: mapGetters(['tasks', 'totalActiveTasks']),      // Options API

    setup() {                                                   // Composition API
        const store = useStore();

        return {
            tasks: computed(() => store.getters.tasks),
            totalActiveTasks: computed(() => store.getters.totalActiveTasks),
        }
    },

    components: {AppTask},
}
</script>
