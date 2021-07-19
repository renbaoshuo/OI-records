import Vue from 'vue';
import Vuex from 'vuex';

import Layout from './Layout';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        layout: Layout,
    }
});
