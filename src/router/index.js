import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Game from '../views/Game.vue';
import Ranking from '../views/Ranking.vue';
import GameOver from '../views/GameOver.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/game-over',
    name: 'Game Over',
    component: GameOver,
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
