<template>
  <div div class="game">
    <Display :number='displayNumber'/>

    <div class="keyboard">
      <GameButton number="1" @click.native="validateNumber(1)"/>
      <GameButton number="2" @click.native="validateNumber(2)"/>
      <GameButton number="3" @click.native="validateNumber(3)"/>
      <GameButton number="4" @click.native="validateNumber(4)"/>
      <GameButton number="5" @click.native="validateNumber(5)"/>
      <GameButton number="6" @click.native="validateNumber(6)"/>
      <GameButton number="7" @click.native="validateNumber(7)"/>
      <GameButton number="8" @click.native="validateNumber(8)"/>
      <GameButton number="9" @click.native="validateNumber(9)"/>
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
      displayNumber: null,
      actualNumber: {},
      userScore: 0,
    };
  },
  methods: {
    getRandomNumber() {
      this.numberList.push(Math.floor(Math.random() * 9 + 1));
    },
    showNumbers() {
      let i = 1;
      this.numberList.forEach((number) => {
        setTimeout(() => {
          this.displayNumber = number;
        }, 300 * i);
        i += 1;
      });
      setTimeout(() => { this.displayNumber = '?'; }, 300 * i);
    },
    validateNumber(n) {
      if (n === this.actualNumber.value) {
        this.userScore += 1;
        this.changeActualNumber();
      } else {
        this.gameOver();
      }
    },
    changeActualNumber() {
      const actualIndex = this.actualNumber.index;
      if (actualIndex === (this.numberList.length - 1)) {
        this.startGame();
      } else {
        this.actualNumber = { index: actualIndex + 1, value: this.numberList[actualIndex + 1] };
      }
    },
    startGame() {
      this.getRandomNumber();
      this.actualNumber = { index: 0, value: this.numberList[0] };
      this.showNumbers();
    },
    gameOver() {
      this.$router.push('game-over');
    },
  },
  mounted() {
    this.startGame();
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
