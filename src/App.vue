<template>
  <div>
    <header style="padding: 20px; border-bottom: 1px solid #000;">
      <h1 style="font-size: 24px; margin-bottom: 10px;">Formation Universitaire - Préparation</h1>
      <nav style="display: flex; gap: 10px;">
        <router-link to="/" style="padding: 8px 16px; border: 1px solid #000; text-decoration: none;">
          Dashboard
        </router-link>
        <button @click="exportProgress" style="padding: 8px 16px; border: 1px solid #000;">
          Exporter progression
        </button>
        <button @click="$refs.fileInput.click()" style="padding: 8px 16px; border: 1px solid #000;">
          Importer progression
        </button>
        <input 
          ref="fileInput" 
          type="file" 
          @change="importProgress" 
          accept=".json"
          style="display: none"
        >
      </nav>
    </header>
    
    <main style="padding: 20px; max-width: 1200px; margin: 0 auto;">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProgressStore } from './stores/progress'

const progressStore = useProgressStore()
const fileInput = ref(null)

function exportProgress() {
  const data = progressStore.exportData()
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `formation-progress-${new Date().toISOString().split('T')[0]}.json`
  a.click()
  URL.revokeObjectURL(url)
}

function importProgress(e) {
  const file = e.target.files[0]
  if (!file) return
  
  const reader = new FileReader()
  reader.onload = (ev) => {
    try {
      progressStore.importData(ev.target.result)
      alert('Progression importée avec succès!')
    } catch {
      alert('Erreur lors de l\'importation')
    }
  }
  reader.readAsText(file)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
}

button {
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #000;
  padding: 10px;
  text-align: left;
}

ul, ol {
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
}

li {
  margin: 5px 0;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

h4 {
  margin-top: 15px;
  margin-bottom: 8px;
}

p {
  margin: 10px 0;
}
</style>