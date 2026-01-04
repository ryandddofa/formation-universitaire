<template>
  <div>
    <button @click="$router.push(`/phase/${phaseId}/module/${moduleId}`)" style="margin-bottom: 20px; padding: 8px 16px; border: 1px solid #000;">
      ← Retour au module
    </button>
    
    <h2>{{ submodule?.title }}</h2>
    
    <!-- JUSTE LA THÉORIE -->
    <div style="border: 1px solid #000; padding: 20px; margin: 20px 0;">
      <div v-html="submodule?.theory"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getSubmoduleContent } from '../data/content'

const route = useRoute()
const phaseId = route.params.phaseId
const moduleId = route.params.moduleId
const submoduleId = route.params.submoduleId

const submodule = computed(() => getSubmoduleContent(submoduleId))
</script>