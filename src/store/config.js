import Vue from 'vue';

const state = {
  options: {},
  configOptions: {
    // id:null,
    // chart_option:{},
    // cname:"描述",
    // type:''
  },
  activeChartKey:"",
  errorMessage:"",
}

const mutations = {
  setOptions(state, options) {
    state.options = options;
  },

  setConfigOptions(state, options) {
    state.configOptions = options;
  },

  setActiveChartKey(state, options) {
    state.activeChartKey = options;
  },

  setErrorMessage(state, msg){
    state.errorMessage = msg;
  }
  
 
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

  setActiveChartKey({
    commit
  }, key) {
    commit("setActiveChartKey", key);
  },

  setErrorMessage({
    commit
  }, msg) {
    commit("setErrorMessage", msg);
  },


}

export default {
  state,
  actions,
  mutations
}