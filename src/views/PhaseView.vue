<template>
  <div>
    <button @click="$router.push('/')" style="margin-bottom: 20px; padding: 8px 16px; border: 1px solid #000;">
      ← Retour au dashboard
    </button>
    
    <h2>{{ phase?.title }}</h2>
    <p>{{ phase?.description }}</p>
    
    <div v-for="module in phase?.modules" :key="module.id" style="border: 1px solid #000; padding: 20px; margin: 20px 0;">
      <h3>{{ module.title }}</h3>
      
      <div style="margin: 10px 0;">
        <strong>Progression: {{ getModuleProgress(module) }}%</strong>
        <div style="border: 1px solid #000; height: 20px; margin-top: 5px;">
          <div style="height: 100%; background: #000;" :style="{ width: getModuleProgress(module) + '%' }"></div>
        </div>
      </div>
      
      <p>{{ module.submodules.length }} sous-modules</p>
      
<router-link 
  :to="`/phase/${phaseId}/module/${module.id}`"
  style="display: inline-block; margin-top: 10px; padding: 8px 16px; border: 1px solid #000; text-decoration: none;"
>
  Accéder au module
</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProgressStore } from '../stores/progress'
import structure from '../data/structure'

const route = useRoute()
const progressStore = useProgressStore()
const phaseId = route.params.phaseId

const phase = computed(() => structure.phases.find(p => p.id === phaseId))

function getModuleProgress(module) {
  const submoduleIds = module.submodules.map(s => s.id)
  return progressStore.getModuleCompletion(module.id, submoduleIds)
}
</script>