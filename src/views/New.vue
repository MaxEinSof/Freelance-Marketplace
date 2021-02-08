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
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            title: '',
            date: '',
            description: '',
        }
    },
    computed: {
        isButtonDisabled() {
            return this.title.length <= 3 || this.date.length <= 3 || this.description.length <= 3;
        },
        isDateExpired() {
            return new Date(this.date) < new Date();
        },
    },
    methods: {
        ...mapActions(['uploadTask']),
        onSubmit() {
            this.uploadTask({
                title: this.title,
                date: this.date,
                description: this.description,
                status: this.isDateExpired ? 'cancelled' : 'active',
            });

            this.$router.push('/tasks');
        },
    },
}
</script>
