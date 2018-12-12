import Vue from "vue";
import Vuex from 'vuex';
import robotsModule from "./modules/robots.js"
import usersModule from "./modules/users.js"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        foo: 'root-foo'
    },
    modules: {
        robots: robotsModule,
        users: usersModule
    },
    getters: {
        foog(state) {
            return `root-getter/${state.foo}`;
        }
    }
});