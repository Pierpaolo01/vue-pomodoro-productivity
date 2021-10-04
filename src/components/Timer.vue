<template>
  <SwitchDialog v-if="GET_SWITCH_DIALOG" @dialogEmits="processSwitchDialog" />
  <section class="timer flex" @click="START_PAUSE_TIMER">
    <div class="timer-container flex">
      <div class="count-time-border" :style="color">
        <h1 :style="font">{{ currentMinutes }}:{{ currentSeconds }}</h1>
        <h2 :style="font">S T A R T</h2>
      </div>
    </div>
  </section>
</template>

<script>
import SwitchDialog from "./SwitchDialog.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    SwitchDialog,
  },
  data() {
    return {
      showSwitchDialog: false,
      startingTime: null,
      currentSeconds: null,
      currentMinutes: null,
      countdown: null,
    };
  },
  methods: {
    ...mapMutations(["START_PAUSE_TIMER", "TOGGLE_SWITCH_DIALOG", "CHANGE_POM"]),

    startStopTimer() {
      if (this.startingTime === null) {
        this.startingTime = this.GET_POM_TIMER * 60;
        console.log(this.startingTime);
      }
      this.currentMinutes = Math.floor(this.startingTime / 60);
      this.currentSeconds = this.startingTime % 60;
      this.currentSeconds =
        this.currentSeconds < 10
          ? "0" + this.currentSeconds
          : this.currentSeconds;

      this.startingTime--;
    },
    processSwitchDialog(val) {
      console.log(val);
      if (val === "return") {
        this.TOGGLE_SWITCH_DIALOG();
      } else if (val === "next") {
        this.CHANGE_POM();
        this.TOGGLE_SWITCH_DIALOG();
        this.startingTime = null;
        this.startStopTimer();
      }
      this.showSwitchDialog = false;
    },
  },
  watch: {
    GET_START_PAUSE(val) {
      this.countdown;
      if (val) {
        this.countdown = setInterval(() => {
          this.startStopTimer();
        }, 1000);
      } else {
        clearInterval(this.countdown);
      }
    },
    GET_POM() {
      if (this.GET_START_PAUSE) {
        this.showSwitchDialog = true;
        this.START_PAUSE_TIMER();
      } else {
        this.startingTime = null;
        this.startStopTimer();
      }
    },
  },
  computed: {
    ...mapGetters([
      "GET_SETTINGS",
      "GET_FONT",
      "GET_COLOR",
      "GET_POM",
      "GET_POM_TIMER",
      "GET_START_PAUSE",
      "GET_SWITCH_DIALOG",
    ]),

    font() {
      return "font-family:" + this.GET_FONT;
    },
    color() {
      return "border-color:" + this.GET_COLOR;
    },
  },
  mounted() {
    this.startStopTimer();
  },
};
</script>

<style lang="scss" scoped>
.timer {
  width: 90%;
  height: 0px;
  padding-bottom: 90%;
  border-radius: 50%;
  //   background-color: white;
  background-color: #1e213f;
  background: linear-gradient(120deg, #161932 35%, #292d53 75%);
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    padding: 0;
  }

  .timer-container {
    background-color: #161932;
    width: 90%;
    height: 0px;
    padding-bottom: 90%;
    border-radius: 50%;
    margin-top: 25px;
    justify-content: center;
    align-items: flex-start;

    @media screen and (min-width: 600px) {
      width: 450px;
      height: 450px;
      border-radius: 50%;
      padding: 0;
    }

    .count-time-border {
      width: 85%;
      height: 0px;
      padding-bottom: 85%;
      border-radius: 50%;
      border: 15px solid;
      margin-top: 0.7em;

      @media screen and (min-width: 600px) {
        margin-top: 1.2em;

        h1 {
          font-size: 100px;
          margin: 100px 0 20px 0 !important;
        }
      }

      h1 {
        color: white;
        font-family: "Kumbh Sans";
        font-size: 80px;
        margin: 55px 0 20px 0;
      }

      h2 {
        color: white;
        font-family: "Kumbh Sans";
        font-size: 30px;
      }
    }
  }
}
</style>