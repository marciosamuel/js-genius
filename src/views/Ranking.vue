<template>
  <div class="score">
    <header class="cabecalho">
      <router-link to="/" class="seta"
        ><img src="../assets/img/arrow-left.svg" alt="voltar"
      /></router-link>
      <h1>Ranking</h1>
    </header>
    <h2 v-if="loading">Loading ranking list...</h2>
    <table class="lista">
      <tr v-for="(ranking, index) in rankingList" :key="index">
        <td>{{index + 1}}</td>
        <td class="nome">{{ranking.name}}</td>
        <td>{{ranking.score}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      rankingList: [
      ],
      loading: true,
    };
  },
  methods: {
    getRankingList() {
      axios
        .get('https://us-central1-prova-front-letras.cloudfunctions.net/ranking')
        .then((response) => {
          this.rankingList = response.data;
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getRankingList();
  },

};
</script>

<style lang="scss" scoped>
.score {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
    h2 {
    font-size: 3.5vh;
    font-weight: 400;
    text-align: center;
    color: var(--main-blue);
  }
}

.cabecalho {
  display: flex;
  align-items: center;
  height: 8%;
  h1{
    width: 35%;
    font-size: 3.5vh;
    font-weight: 400;
    text-align: center;
  }
}

.seta {
  height: 100%;
  width: 35%;
  overflow: hidden;
  img {
    height: 100%;
    width: auto;
  }
}

.lista {
  display: list-item;
  height: 85%;
  overflow-y: scroll;
  color: var(--main-blue);
  tr {
    font-size: 3.5vh;
    line-height: 6vh;
    width: 90%;
    &:nth-child(-n + 3) {
      color: var(--light-blue);
    }
    td {
      text-align: right;
      &:nth-child(2) {
        padding-left: 10%;
        width: 75%;
        text-align: left;
      }
    }
  }
}
</style>
