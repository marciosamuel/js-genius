<template>
  <div div class="game">
    <Display number="?"/>

    <div class="keyboard">
      <GameButton number="1"/>
      <GameButton number="2"/>
      <GameButton number="3"/>
      <GameButton number="4"/>
      <GameButton number="5"/>
      <GameButton number="6"/>
      <GameButton number="7"/>
      <GameButton number="8"/>
      <GameButton number="9"/>
    </div>
  </div>
</template>

<script>
import GameButton from '../components/GameButton.vue';
import Display from '../components/Display.vue';

export default {
  components: {
    GameButton,
    Display,
  },
  data() {
    return {
      numberList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.game {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.keyboard {
  width: 99%;
  height: 45vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  border-top: 0.5vh solid var(--main-blue);
  border-left: 0.5vh solid var(--main-blue);
}
</style>
