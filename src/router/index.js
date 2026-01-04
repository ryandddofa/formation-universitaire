import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PhaseView from '../views/PhaseView.vue'
import ModuleView from '../views/ModuleView.vue'
import SubmoduleView from '../views/SubmoduleView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/phase/:phaseId', component: PhaseView },
    { path: '/phase/:phaseId/module/:moduleId', component: ModuleView },
    { path: '/phase/:phaseId/module/:moduleId/submodule/:submoduleId', component: SubmoduleView }
  ]
})