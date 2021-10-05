  <template>
  <div class="root">
    <teleport to="body">
      <div class="container-modal flex">
        <div class="content flex-column">
          <p>Are you sure you want to EXIT? Your changes will not be saved</p>
          <div class="actions flex">
            <button @click="$emit('dialogEmits', 'return')" class="purple">
              Return
            </button>
            <button @click="$emit('dialogEmits', 'next')" class="red">
              Next Pom
            </button>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  methods: {},
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
    max-width: 450px;
    border-radius: 10px;
    background-color: white;
    max-width: 450px;
    justify-content: space-between;
    padding: 48px 32px;
    background-color: #252945;
    color: #fff;

    p {
      text-align: center;
    }
    .actions {
      margin-top: 24px;
      button {
        flex: 1;
      }
    }
    button,
    .button {
      cursor: pointer;
      padding: 16px 24px;
      border-radius: 30px;
      border: none;
      font-size: 12px;
      margin-right: 8px;
      color: #fff;
    }
  }
}
</style>