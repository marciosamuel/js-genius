<template>
  <button type="button">{{number}}</button>
</template>

<script>
export default {
  props: {
    number: String,
  },

};
</script>

<style lang="scss" scoped>
button {
    border: none;
    border-bottom: 0.5vh solid var(--main-blue);
    border-right: 0.5vh solid var(--main-blue);
    background-color: var(--background);
    color: var(--light-blue);
    font-size: 10vh;
    outline: none;
    cursor: pointer;
    &:hover,
    :active {
      background-color: var(--main-blue);
      color: var(--base);
    }
  }
</style>
