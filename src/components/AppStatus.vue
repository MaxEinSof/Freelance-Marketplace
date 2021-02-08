<template>
    <span :class="['badge', color]"> {{ text }} </span>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    computed: {
        color() {
            switch (this.type) {
                case 'active':
                case 'done':
                    return 'primary';
                case 'cancelled':
                    return 'danger';
                case 'pending':
                    return 'warning';
            }
        },
        text() {
            switch (this.type) {
                case 'active':
                    return 'Активен';
                case 'done':
                    return 'Завершен';
                case 'cancelled':
                    return 'Отменен';
                case 'pending':
                    return 'Выполняется';
            }
        },
    },
}
</script>
