<template>
  <div>
    <h2>Phases de formation</h2>
    
    <div v-for="phase in structure.phases" :key="phase.id" style="border: 1px solid #000; padding: 20px; margin: 20px 0;">
      <h3>{{ phase.title }}</h3>
      <p>{{ phase.description }}</p>
      
      <div style="margin: 10px 0;">
        <strong>Progression: {{ getPhaseProgress(phase.id) }}%</strong>
        <div style="border: 1px solid #000; height: 20px; margin-top: 5px;">
          <div style="height: 100%; background: #000;" :style="{ width: getPhaseProgress(phase.id) + '%' }"></div>
        </div>
      </div>
      
<router-link 
  :to="`/phase/${phase.id}`"
  style="display: inline-block; margin-top: 10px; padding: 8px 16px; border: 1px solid #000; text-decoration: none;"
>
  Accéder à la phase
</router-link>
    </div>
    
    <div style="margin-top: 40px; padding: 20px; border: 1px solid #000;">
      <h3>Statistiques globales</h3>
      <p>Sous-modules complétés: {{ Object.keys(progressStore.submodules).length }}</p>
      <button @click="progressStore.reset()" style="margin-top: 10px; padding: 8px 16px; border: 1px solid #000;">
        Réinitialiser la progression
      </button>
    </div>
  </div>
</template>

<script setup>
import { useProgressStore } from '../stores/progress'
import structure from '../data/structure'

const progressStore = useProgressStore()

function getPhaseProgress(phaseId) {
  const phase = structure.phases.find(p => p.id === phaseId)
  if (!phase) return 0
  
  const moduleIds = phase.modules.map(m => m.id)
  const allSubmodules = {}
  phase.modules.forEach(m => {
    allSubmodules[m.id] = m.submodules.map(s => s.id)
  })
  
  return progressStore.getPhaseCompletion(moduleIds, allSubmodules)
}
</script>