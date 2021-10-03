<template>
  <section class="menu-bar flex">
    <span
      class="pomodoro"
      :style="GET_POM === 'pomodoro' ? color : ''"
      :class="GET_POM === 'pomodoro' ? 'active' : ''"
      @click="CHANGE_POM('pomodoro')"
      >pomodoro</span
    >
    <span
      class="short-break"
      :style="GET_POM === 'short' ? color : ''"
      :class="GET_POM === 'short' ? 'active' : ''"
      @click="CHANGE_POM('short')"
      >short break</span
    >
    <span
      class="long-break"
      :style="GET_POM === 'long' ? color : ''"
      :class="GET_POM === 'long' ? 'active' : ''"
      @click="CHANGE_POM('long')"
      >long break</span
    >
  </section>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {

  methods: {
    ...mapMutations(["CHANGE_POM"]),
  },
  computed: {
    ...mapGetters(["GET_COLOR", "GET_POM"]),
    color() {
      return "background-color:" + this.GET_COLOR;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-bar {
  background-color: #161932;
  padding: 10px;
  border-radius: 50px;

  .short-break {
    margin: 0 10px;
  }
  span {
    padding: 15px;
    color: #636984;
    border-radius: 45px;
    font-family: "Kumbh Sans";
  }
}

.active {
  color: black !important;
}
</style>