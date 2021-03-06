import Vue from "vue";
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        cart: [],
        parts: null,
        foo: 'robots-foo'
    },
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
        updateParts(state, parts) {
            state.parts = parts;
        }
    },
    actions: {
        getParts({ commit }) {
            axios.get('/api/parts')
                .then(result => {
                    commit('updateParts', result.data);
                })
                // eslint-disable-next-line no-console
                .catch(console.error);
        },
        addRobotToCart({ commit, state }, robot) {
            const cart = [...state.cart, robot];
            return axios.post('/api/cart', cart).then(() => commit('addRobotToCart', robot));
        }
    },
    getters: {
        cartSaleItems(state) {
            return state.cart.filter(x => x.head.onSale || x.torso.onSale);
        },
        foo(state) {
            return `robots-getter/${state.foo}`;
        }
    }
};