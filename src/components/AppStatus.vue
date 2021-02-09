<template>
    <span :class="['badge', color]"> {{ text }} </span>
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        type: {
            type: String,
            required: true,
        },
    },

    // computed: {                                  // Options API
    //     color() {
    //         switch (this.type) {
    //             case 'active':
    //             case 'done':
    //                 return 'primary';
    //             case 'cancelled':
    //                 return 'danger';
    //             case 'pending':
    //                 return 'warning';
    //         }
    //     },
    //     text() {
    //         switch (this.type) {
    //             case 'active':
    //                 return 'Активен';
    //             case 'done':
    //                 return 'Завершен';
    //             case 'cancelled':
    //                 return 'Отменен';
    //             case 'pending':
    //                 return 'Выполняется';
    //         }
    //     },
    // },

    setup(props) {                                  // Composition API
        const color = computed(() => {
            switch (props.type) {
                case 'active':
                case 'done':
                    return 'primary';
                case 'cancelled':
                    return 'danger';
                case 'pending':
                    return 'warning';
            }
        });

        const text = computed(() => {
            switch (props.type) {
                case 'active':
                    return 'Активен';
                case 'done':
                    return 'Завершен';
                case 'cancelled':
                    return 'Отменен';
                case 'pending':
                    return 'Выполняется';
            }
        });

        return {color, text}
    },
}
</script>
