export default {
    actions: {},
    modules: {},
    state: {
        drawerState: false
    },
    getters: {
        drawerState(store) {
            return store.drawerState;
        }
    },
    mutations: {
        toggleDrawer(state) {
            state.drawerState = !state.drawerState;
        },
        setDrawer(state, val) {
            state.drawerState = val;
        }
    }
};
