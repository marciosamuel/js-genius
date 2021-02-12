<template>
  <div class="display">
    <span>{{number}}</span>
  </div>
</template>

<script>
export default {
  props: {
    number: String,
  },
};
</script>

<style lang="scss" scoped>
.display {
  display: flex;
  height: 33vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  span {
    display: flex;
    height: 22.5vh;
    width: 22.5vh;
    border: 0.5vh solid var(--base);
    border-radius: 1.5vh;
    justify-content: center;
    align-items: center;
    font-size: 15vh;
  }
}
</style>
