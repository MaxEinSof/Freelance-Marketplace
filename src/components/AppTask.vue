<template>
    <div class="card">
        <h2 class="card-title">
            {{ title }}
            <AppStatus :type="status"/>
        </h2>

        <p>
            <strong>
                <small>
                    {{ date }}
                </small>
            </strong>
        </p>

        <router-link
            :to="`/task/${id}`"
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

<script>
import AppStatus from '../components/AppStatus';

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    components: {AppStatus},
}
</script>
