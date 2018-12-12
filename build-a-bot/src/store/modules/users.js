import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'users-foo'
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    foo(state) {
      return `users-getter/${state.foo}`;
    }
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        // eslint-disable-next-line no-console
        .catch(console.error);
    },
    addRobotToCart() {
      // eslint-disable-next-line no-console
      console.log('users addRobotToCart called.');
    }
  },
};