const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
});

var app = new Vue({
  el: "#app",
  store,
  computed: {
    count() {
      return store.state.count;
    },
  },
  methods: {
    increment() {
      store.dispatch("incrementAsync");
    },
    decrement() {
      store.commit("decrement");
    },
  },
});
