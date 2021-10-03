import { createStore } from "vuex";

export default createStore({
  state: {
    activePomodoro: "pomodoro",
    pom: 25,
    short: 5,
    long: 15,
    settingsIsOpen: false,
    fontStyle: "kumbh sans",
    mainColor: "#f87070",
  },
  mutations: {
    CHANGE_POM(state, payload) {
      state.activePomodoro = payload;
    },
    TOGGLE_SETTINGS(state) {
      state.settingsIsOpen = !state.settingsIsOpen;
    },
    CHANGE_FONT(state, payload) {
      state.fontStyle = payload;
    },
    CHANGE_COLOR(state, payload) {
      state.mainColor = payload;
    },
  },
  getters: {
    GET_POM(state) {
      return state.activePomodoro;
    },
    GET_POM_TIMER(state) {
      if (state.activePomodoro === "pomodoro") {
        return state.pom;
      } else if (state.activePomodoro === "short") {
        return state.short;
      } else if (state.activePomodoro === "long") {
        return state.long;
      }
      return "";
    },
    GET_SETTINGS(state) {
      return state.settingsIsOpen;
    },
    GET_FONT(state) {
      return state.fontStyle;
    },
    GET_COLOR(state) {
      return state.mainColor;
    },
  },
});
