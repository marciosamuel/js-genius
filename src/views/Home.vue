<template>
  <div class="home">
    <router-link to="/ranking" class="ranking">
      <img src="../assets/img/ranking.svg" alt="Ranking" />
    </router-link>
    <img
      src="../assets/img/logo.svg"
      alt="logotipo do genius"
      class="logo"
    />
    <router-link to="/game">
      <ButtonSubmit name="Iniciar Jogo"/>
    </router-link>
  </div>
</template>

<script>
import ButtonSubmit from '../components/ButtonSubmit.vue';

export default {
  components: {
    ButtonSubmit,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ranking {
  align-self: flex-end;
  img {
    height: 4.8vh;
  }
}

.logo {
  height: 6.3vh;
}

</style>
