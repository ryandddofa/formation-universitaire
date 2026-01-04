import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProgressStore = defineStore('progress', () => {
  // État: progression par sous-module
  const submodules = ref(JSON.parse(localStorage.getItem('formation-progress') || '{}'))

  function save() {
    localStorage.setItem('formation-progress', JSON.stringify(submodules.value))
  }

  function completeSubmodule(id, score = 100) {
    submodules.value[id] = {
      completed: true,
      score: score,
      completedAt: new Date().toISOString()
    }
    save()
  }

  function isSubmoduleCompleted(id) {
    return submodules.value[id]?.completed || false
  }

  function getModuleCompletion(moduleId, submoduleIds) {
    const completed = submoduleIds.filter(id => isSubmoduleCompleted(id)).length
    return Math.round((completed / submoduleIds.length) * 100)
  }

  function isModuleCompleted(moduleId, submoduleIds) {
    return submoduleIds.every(id => isSubmoduleCompleted(id))
  }

  function getPhaseCompletion(moduleIds, allSubmodules) {
    let total = 0
    let completed = 0
    
    moduleIds.forEach(moduleId => {
      const subs = allSubmodules[moduleId] || []
      total += subs.length
      completed += subs.filter(id => isSubmoduleCompleted(id)).length
    })
    
    return total > 0 ? Math.round((completed / total) * 100) : 0
  }

  function exportData() {
    return JSON.stringify({
      version: '1.0',
      exportedAt: new Date().toISOString(),
      data: submodules.value
    }, null, 2)
  }

  function importData(jsonString) {
    const imported = JSON.parse(jsonString)
    if (imported.version === '1.0' && imported.data) {
      submodules.value = imported.data
      save()
    }
  }

  function reset() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser toute votre progression ?')) {
      submodules.value = {}
      save()
    }
  }

  return {
    submodules,
    completeSubmodule,
    isSubmoduleCompleted,
    getModuleCompletion,
    isModuleCompleted,
    getPhaseCompletion,
    exportData,
    importData,
    reset
  }
})