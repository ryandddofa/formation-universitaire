<template>
  <div>
    <button @click="$router.push(`/phase/${phaseId}`)" style="margin-bottom: 20px; padding: 8px 16px; border: 1px solid #000;">
      ← Retour à la phase
    </button>
    
    <h2>{{ module?.title }}</h2>
    
    <div style="margin: 20px 0;">
      <strong>Progression: {{ moduleProgress }}%</strong>
      <div style="border: 1px solid #000; height: 20px; margin-top: 5px;">
        <div style="height: 100%; background: #000;" :style="{ width: moduleProgress + '%' }"></div>
      </div>
    </div>
    
    <div v-for="sub in module?.submodules" :key="sub.id" style="border: 1px solid #000; padding: 15px; margin: 15px 0;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h3>{{ sub.title }}</h3>
          <p v-if="progressStore.isSubmoduleCompleted(sub.id)">
            ✓ Complété (Score: {{ progressStore.submodules[sub.id]?.score }}%)
          </p>
        </div>
        
        <router-link 
          :to="`/phase/${phaseId}/module/${moduleId}/submodule/${sub.id}`"
          style="padding: 8px 16px; border: 1px solid #000; text-decoration: none;"
        >
          {{ progressStore.isSubmoduleCompleted(sub.id) ? 'Réviser' : 'Commencer' }}
        </router-link>
      </div>
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
const moduleId = route.params.moduleId

const phase = computed(() => structure.phases.find(p => p.id === phaseId))
const module = computed(() => phase.value?.modules.find(m => m.id === moduleId))

const moduleProgress = computed(() => {
  if (!module.value) return 0
  const submoduleIds = module.value.submodules.map(s => s.id)
  return progressStore.getModuleCompletion(moduleId, submoduleIds)
})
</script>