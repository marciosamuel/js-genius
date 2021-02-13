<template>
  <input type="text" :value="value" @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  props: ['value'],
};
</script>

<style lang="scss" scoped>
input {
  background-color: transparent;
  border: 0.5vh solid var(--main-blue);
  border-radius: 1.5vh;
  color: var(--light-blue);
  width: 100%;
  height: 12vh;
  outline: none;
  font-size: 3.5vh;
  padding-left: 2vh;
}
</style>
