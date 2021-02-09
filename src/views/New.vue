<template>
    <form
        class="card"
        @submit.prevent="onSubmit"
    >
        <h1>Создать новую задачу</h1>

        <div class="form-control">
            <label for="title">Название</label>
            <input
                type="text"
                id="title"
                v-model="title"
            >
        </div>

        <div class="form-control">
            <label for="date">Дата дэдлайна</label>
            <input
                type="date"
                id="date"
                v-model="date"
            >
        </div>

        <div class="form-control">
            <label for="description">Описание</label>
            <textarea
                id="description"
                v-model="description"
            ></textarea>
        </div>

        <button
            class="btn primary"
            :disabled="isButtonDisabled"
        >Создать</button>
    </form>
</template>

<script>
import {ref, computed, watch} from "vue";
import { mapActions, useStore } from 'vuex';
import { useRouter } from "vue-router";

export default {
    // data() {                             // Options API
    //     return {
    //         title: '',
    //         date: '',
    //         description: '',
    //     }
    // },
    // computed: {
    //     isButtonDisabled() {
    //         return this.title.length <= 3 || this.date.length <= 3 || this.description.length <= 3;
    //     },
    //     isDateExpired() {
    //         return new Date(this.date) < new Date();
    //     },
    // },
    // methods: {
    //     ...mapActions(['uploadTask']),
    //     onSubmit() {
    //         this.uploadTask({
    //             title: this.title,
    //             date: this.date,
    //             description: this.description,
    //             status: this.isDateExpired ? 'cancelled' : 'active',
    //         });
    //
    //         this.$router.push('/tasks');
    //     },
    // },

    setup() {                               // Composition API
        const store = useStore();
        const router = useRouter()

        const title = ref('');
        const date = ref('');
        const description = ref('');

        const isButtonDisabled = computed(() => {
            return title.value.length <= 3 || date.value.length <= 3 || description.value.length <= 3;
        });
        const isDateExpired = computed(() => new Date(date.value) < new Date());

        function onSubmit() {
            store.dispatch('uploadTask', {
                title: title.value,
                date: date.value,
                description: description.value,
                status: isDateExpired.value ? 'cancelled' : 'active',
            })

            router.push('/tasks');
        }

        return {title, date, description, isButtonDisabled, onSubmit}
    },
}
</script>
