import Vue from 'vue';

const state = {
  options: {},
  configOptions: {},
}

const mutations = {
  setOptions(state, options) {
    state.options = options;
  },

  setConfigOptions(state, options) {
    state.configOptions = options;
  },
 
}

const actions = {
  setOptions({
    commit
  }, options) {
    commit("setOptions", options);
  },

  setConfigOptions({
    commit
  }, options) {
    commit("setConfigOptions", options);
  },

}

export default {
  state,
  actions,
  mutations
}