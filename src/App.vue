<template>
  <div class="container flex-column">
    <h1 :style="font" class="title">Pomodoro</h1>
    <MenuBar />
    <Timer />

    <button class="setting-btn" @click="TOGGLE_SETTINGS">
      <img
        src="./assets/icon-settings.svg"
        alt="settings icon"
        class="setting-icon"
      />
    </button>
    
  </div>
  <SettingsModal v-if="GET_SETTINGS" />
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import Timer from "./components/Timer.vue";
import SettingsModal from "./components/SettingsModal.vue";


import { mapMutations, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    MenuBar,
    Timer,
    SettingsModal,
  },
  data(){
    return{
      settingsIsOpen: false,
    }
  },

  methods:{

    ...mapMutations(["TOGGLE_SETTINGS"]),
    openSettings(){
      this.settingsIsOpen = !this.settingsIsOpen
    },
  },
  computed: {
    ...mapGetters(["GET_SETTINGS", "GET_FONT", "GET_COLOR"]),
    font() {
      return "font-family:" + this.GET_FONT;
    },
    color(){
      return "background-color:" + this.GET_COLOR;
    },
  },
};
</script>

<style lang="scss">
.container {
  height: 100%;
  justify-content: space-between;
  align-items: center;

  .title {
    color: white;
    font-family: "Kumbh Sans";
  }

  .setting-btn {
  background: transparent;
  border: none;
  margin-bottom: 20px;
  .setting-icon {
    color: red;
    width: 35px;
    height: 35px;
  }
}
}

.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

html {
  height: 100%;
}

body {
  background-color: #1e213f;
  height: 100%;
  margin: 0;
}

.red {
  background-color: #ec5757;
}

.purple {
  background-color: #7c5dfa;
}
</style>
