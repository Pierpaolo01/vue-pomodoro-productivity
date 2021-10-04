<template>
  <div class="root">
    <teleport to="body">
      <div class="container-modal flex">
        <div class="content flex-column">
          <header class="flex">
            <h1>Settings</h1>
            <button @click="TOGGLE_SETTINGS">
              <img src="@/assets/icon-close.svg" alt="close modal" />
            </button>
          </header>
          <main class="body flex-column">
            <h3 >T I M E (M I N U T E S)</h3>

            <div class="pomodoro flex">
              <label for="pom" >pomodoro</label>
              <input type="number" id="pom"  v-model="pom" @input="CHANGE_TIMING( {cName: 'pom', val: $event.target.value })"/>
            </div>

            <div class="short flex">
              <label for="short" >short break</label>
              <input type="number" id="short" v-model="short" @input="CHANGE_TIMING( {cName: 'short', val: $event.target.value })"/>
            </div>

            <div class="long flex">
              <label for="long" >long break</label>
              <input type="number" id="long" v-model="long" @input="CHANGE_TIMING( {cName: 'long', val: $event.target.value })"/>
            </div>
          </main>
          <div class="options flex-column">
            <div class="fonts-container flex-column">
              <h3>F O N T</h3>
              <div class="fonts flex">
                <button
                  style="font-family: 'kumbh sans'"
                  @click="CHANGE_FONT('kumbh sans')"
                  :class="GET_FONT === 'kumbh sans' ? 'selected-font' : ''"
                >
                  Aa
                </button>
                <button
                  style="font-family: 'roboto slab'"
                  @click="CHANGE_FONT('roboto slab')"
                  :class="GET_FONT === 'roboto slab' ? 'selected-font' : ''"
                >
                  Aa
                </button>
                <button
                  style="font-family: 'space mono'"
                  @click="CHANGE_FONT('space mono')"
                  :class="GET_FONT === 'space mono' ? 'selected-font' : ''"
                >
                  Aa
                </button>
              </div>
            </div>

            <div class="colors-container flex-column">
              <h3 >C O L O R</h3>
              <div class="color flex">
                <button style="background-color: #f87070" @click="CHANGE_COLOR('#f87070')">
                  <div :class="GET_COLOR === '#f87070' ? 'check' : ''"></div>
                </button>
                <button style="background-color: #70f3f8" @click="CHANGE_COLOR('#70f3f8')">
                  <div :class="GET_COLOR === '#70f3f8' ? 'check' : ''"></div>
                </button>
                <button style="background-color: #d881f8" @click="CHANGE_COLOR('#d881f8')">
                  <div :class="GET_COLOR === '#d881f8' ? 'check' : ''"></div>
                </button>
              </div>
            </div>
          </div>
          <button class="close" :style=" color" @click="TOGGLE_SETTINGS">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState } from "vuex";
export default {
  methods: {
    ...mapMutations(["TOGGLE_SETTINGS", "CHANGE_FONT", "CHANGE_COLOR", "CHANGE_COLOR", "CHANGE_TIMING"]),
  },
  computed: {
    ...mapState(["pom", "short", "long"]),
    ...mapGetters(["GET_FONT", "GET_COLOR"]),
    font() {
      return "font-family:" + this.GET_FONT;
    },
    color(){
      return "background-color:" + this.GET_COLOR;
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  position: relative;
}

.container-modal {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.404);
  z-index: 5;
  // display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: 85%;
    height: 85%;
    border-radius: 10px;
    background-color: white;
    max-width: h0px;
    justify-content: space-between;

    header {
      padding: 0 15px;
      justify-content: space-between;
    }

    main {
      h3 {
        text-align: center;
      }
      div {
        justify-content: space-between;
        margin: 20px 20px;

        input {
          border: none;
          max-width: 145px;
        }
      }
    }

    .options {
      align-items: center;
      .fonts-container {
        width: 100%;
        align-items: center;

        button {
          width: 40px;
          height: 40px;
          margin: 0 20px;
          padding: 10px;
          border-radius: 100%;
        }

        .selected-font {
          background-color: darkslategray;
          color: white;
        }
      }

      .colors-container {
        width: 100%;
        align-items: center;

        button {
          width: 40px;
          height: 40px;
          margin: 0 20px;
          padding: 10px;
          border-radius: 100%;
        }
        .check {
          display: inline-block;
          transform: rotate(45deg);
          height: 14px;
          width: 7px;
          border-bottom: 5px solid black;
          border-right: 5px solid black;
        }
      }
    }

    button {
      background-color: transparent;
      border: none;
    }

    .close{
      width: 140px;
      height: 50px;
      padding: 15px;
      border-radius: 20px;
      color: white;
      margin: 70px auto 0 auto;
    }
  }
}
</style>