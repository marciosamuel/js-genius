<template>
  <div class="game-over">
    <router-link to="/" class="fechar">
      <img src="../assets/img/fechar.svg" alt="voltar ao início" />
    </router-link>
    <h1>Fim do Jogo</h1>
    <div class="pontuacao-container">
      <p>score</p>
      <h2>{{ score }}</h2>
    </div>
    <Input v-model="name" placeholder="Digite seu nome"/>
    <ButtonSubmit name="Salvar Ranking" @click.native="saveScore()"/>
  </div>
</template>

<script>
import axios from 'axios';
import ButtonSubmit from '../components/ButtonSubmit.vue';
import Input from '../components/Input.vue';

export default {
  components: {
    ButtonSubmit,
    Input,
  },
  data() {
    return {
      // eslint-disable-next-line quotes
      name: "",
      score: this.$route.params.score || 0,
    };
  },
  methods: {
    saveScore() {
      if (this.name) {
        axios
          .post('https://us-central1-prova-front-letras.cloudfunctions.net/save', {
          /* eslint-disable quote-props */
          // eslint-disable-next-line quotes
            "name": this.name, "score": this.score,
          })
          .then(() => {
            this.$router.push('ranking');
          })
          .catch((error) => {
            console.error('There was an error!', error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-over {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  h1 {
    font-size: 7vh;
    font-weight: 400;
  }
}

.fechar {
  align-self: flex-end;
}

.pontuacao-container {
  display: flex;
  flex-direction: column;
  height: 40%;
  justify-content: flex-end;
  padding-bottom: 2vh;
  p {
    font-size: 2.6vh;
    line-height: 0;
  }
  h2 {
    font-size: 15vh;
    font-weight: 400;
  }
}
</style>
