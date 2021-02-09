<template>
    <div class="card"
         v-if="task"
    >
        <h2> {{ task.title }} </h2>

        <p>
            <strong>Статус</strong>:
            <AppStatus :type="task.status"/>
        </p>

        <p><strong>Дэдлайн</strong>: {{ task.date }}</p>

        <p><strong>Описание</strong>: {{ task.description }}</p>

        <div>
            <button
                class="btn"
                @click="onChangeStatus('pending')"
            >Взять в работу</button>

            <button
                class="btn primary"
                @click="onChangeStatus('done')"
            >Завершить</button>

            <button
                class="btn danger"
                @click="onChangeStatus('cancelled')"
            >Отменить</button>
        </div>
    </div>

    <h3 class="text-white center"
        v-else
    >
        Задачи с id = <strong> {{ id }} </strong> нет.
    </h3>
</template>

<script>
import { computed } from 'vue';
import { mapActions, useStore } from 'vuex';
import AppStatus from '../components/AppStatus'

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },

    // computed: {                                          // Options API
    //     task() {
    //         return this.$store.getters.task(this.id);
    //     },
    // },
    // methods: {
    //     ...mapActions(['uploadTaskStatus']),
    //     onChangeStatus(status) {
    //         this.uploadTaskStatus({
    //             id: this.id,
    //             status,
    //         });
    //     },
    // },

    setup(props) {                                          // Composition API
        const store = useStore();

        const task = computed(() => store.getters.task(props.id));

        function onChangeStatus(status) {
            store.dispatch('uploadTaskStatus', {
                id: props.id,
                status,
            })
        }

        return {task, onChangeStatus,}
    },

    components: {AppStatus},
}
</script>
