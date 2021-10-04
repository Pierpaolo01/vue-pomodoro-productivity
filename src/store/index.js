import { createStore } from "vuex";

export default createStore({
  state: {
    activePomodoro: "pomodoro",
    chosenPom: null,
    promptSwitchDialog: false,
    isTicking: false,
    pom: 25,
    short: 5,
    long: 15,
    settingsIsOpen: false,
    fontStyle: "kumbh sans",
    mainColor: "#f87070",
  },
  mutations: {
    CHANGE_POM(state, payload) {
      if (payload) {
        state.chosenPom = payload;
      }
      if (state.isTicking) {
        state.promptSwitchDialog = true;
        state.isTicking = false;
      } else {
        state.activePomodoro = state.chosenPom;
      }
    },
    CHANGE_TIMING(state, payload){

        if(payload.cName === 'pom'){
            state.pom = payload.val;
        }else if (payload.cName === 'short'){
            state.short = payload.val;
        }else if(payload.cName === 'long'){
            state.long = payload.val;
        }
    },
    TOGGLE_SWITCH_DIALOG(state) {
      state.promptSwitchDialog = !state.promptSwitchDialog;
      state.isTicking = true;
    },
    START_PAUSE_TIMER(state) {
      state.isTicking = !state.isTicking;
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
    GET_START_PAUSE(state) {
      return state.isTicking;
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
    GET_SWITCH_DIALOG(state) {
      return state.promptSwitchDialog;
    },
  },
});
