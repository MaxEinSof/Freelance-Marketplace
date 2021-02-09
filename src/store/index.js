import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            tasks: [],
            databaseUrl: 'https://freelance-marketplace-97601-default-rtdb.firebaseio.com/tasks',
        }
    },
    getters: {
        tasks(state) {
            return state.tasks;
        },
        task: (state) => (id) => {
            return state.tasks.find(task => task.id === id);
        },
        totalActiveTasks(state) {
            return state.tasks.reduce((total, task) => total + (task.status === 'active' ? 1 : 0), 0);
        },
    },
    mutations: {
        createTasks(state, tasks) {
            state.tasks = tasks;
        },
        createTask(state, task) {
            state.tasks.push(task);
        },
    },
    actions: {
        async loadTasks({ state, commit }) {
            try {
                const response = await fetch(`${state.databaseUrl}.json`);
                const result = await response.json();
                const tasks = Object.keys(result).map(id => ({ id, ...result[id] }) );

                commit('createTasks', tasks);

            } catch (e) {
                console.log(e.message);
            }
        },
        async uploadTask({ state, commit }, task) {
            const response = await fetch(`${state.databaseUrl}.json`, {
                method: 'POST',
                body: JSON.stringify(task),
            });
            const result = await response.json();

            task.id = result.name;
            commit('createTask', task);
        },
        async uploadTaskStatus({ state, getters }, payload) {
            const task = getters.task(payload.id);
            task.status = payload.status;

            await fetch(`${state.databaseUrl}/${payload.id}/status.json`, {
                method: 'PUT',
                body: JSON.stringify(payload.status),
            });
        },
    },
});
