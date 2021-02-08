<template>
    <h1 class="text-white center"
        v-if="!tasks.length"
    >Задач пока нет</h1>

    <template v-else>
        <h3 class="text-white">Всего активных задач: {{ totalActiveTasks }}</h3>

        <div class="card"
             v-for="task in tasks"
             :key="task.id"
        >
            <h2 class="card-title">
                {{ task.title }}
                <AppStatus :type="task.status"/>
            </h2>

            <p>
                <strong>
                    <small>
                        {{ task.date }}
                    </small>
                </strong>
            </p>

            <router-link
                :to="`/task/${task.id}`"
                v-slot="{ navigate }"
                custom
            >
                <button
                    class="btn primary"
                    @click="navigate"
                >Посмотреть</button>
            </router-link>
        </div>
    </template>
</template>

<script>
import { mapGetters } from 'vuex';
import AppStatus from '../components/AppStatus';

export default {
    computed: mapGetters(['tasks', 'totalActiveTasks']),
    components: {AppStatus},
}
</script>
