<template>
  <div style="border: 1px solid #000; padding: 20px; margin: 20px 0;">
    <h3>{{ exercise.question }}</h3>
    <p>{{ exercise.instruction }}</p>
    
    <div v-for="(item, index) in exercise.items" :key="index" style="margin: 15px 0;">
      <p><strong>{{ item.text }}</strong></p>
      <select 
        v-model="answers[index]"
        :disabled="validated"
        style="padding: 5px; border: 1px solid #000; margin-top: 5px;"
      >
        <option value="">-- Choisir --</option>
        <option v-for="option in exercise.options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      
      <span v-if="validated">
        {{ answers[index] === item.answer ? ' ✓' : ' ✗' }}
      </span>
    </div>
    
    <button 
      v-if="!validated"
      @click="validate"
      :disabled="!allAnswered"
      style="margin-top: 15px; padding: 8px 16px; border: 1px solid #000;"
    >
      Valider
    </button>
    
    <div v-if="validated" style="margin-top: 15px; padding: 15px; border: 1px solid #000;">
      <strong>Score: {{ score }}%</strong>
      <p style="margin-top: 10px;">{{ exercise.explanation }}</p>
    </div>
    
    <button 
      v-if="validated && !showCorrection"
      @click="showCorrection = true"
      style="margin-top: 10px; padding: 8px 16px; border: 1px solid #000;"
    >
      Voir les réponses
    </button>
    
    <div v-if="showCorrection" style="margin-top: 15px; padding: 15px; border: 1px solid #000;">
      <h4>Réponses correctes:</h4>
      <div v-for="(item, index) in exercise.items" :key="index" style="margin: 10px 0;">
        <strong>{{ item.text }}</strong> → {{ item.answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  exercise: Object
})

const emit = defineEmits(['validated'])

const answers = ref({})
const validated = ref(false)
const showCorrection = ref(false)

const allAnswered = computed(() => {
  return props.exercise.items.every((_, index) => answers.value[index])
})

const score = computed(() => {
  if (!validated.value) return 0
  const correct = props.exercise.items.filter((item, index) => 
    answers.value[index] === item.answer
  ).length
  return Math.round((correct / props.exercise.items.length) * 100)
})

function validate() {
  validated.value = true
  emit('validated', score.value)
}
</script>