import { createRouter, createWebHistory } from "vue-router";
import PreApp from './components/PreApp.vue'
import Dashboard from './components/Dashboard.vue'
import Game from './components/game/Game.vue'
const routes = [
  { path: "/", component: PreApp },
  { path: "/dashboard", component: Dashboard },
  { path: "/game", component: Game }
]
const history = createWebHistory();
const router = createRouter({
  history,
  routes,
})
export default router