<template>
  <button type="button">{{this.name}}</button>
</template>

<script>
module.exports = {
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: var(--main-blue);
  border: 0.5vh solid var(--light-blue);
  border-radius: 1.5vh;
  color: var(--base);
  width: 100%;
  height: 12vh;
  outline: none;
  font-size: 3.5vh;
  cursor: pointer;
}
</style>
