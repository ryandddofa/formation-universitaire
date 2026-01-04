<template>
  <div style="border: 1px solid #000; padding: 20px; margin: 20px 0;">
    <h3>{{ exercise.question }}</h3>
    <p>{{ exercise.instruction }}</p>
    
    <div v-for="(item, index) in exercise.items" :key="index" style="margin: 15px 0;">
      <p><strong>{{ item.prompt }}</strong></p>
      <input 
        type="text"
        v-model="answers[index]"
        :disabled="validated"
        style="width: 100%; padding: 8px; border: 1px solid #000; margin-top: 5px;"
      />
      
      <span v-if="validated">
        {{ isAnswerCorrect(index) ? ' ✓' : ' ✗' }}
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
      <h4>Réponses attendues:</h4>
      <div v-for="(item, index) in exercise.items" :key="index" style="margin: 10px 0;">
        <strong>{{ item.prompt }}</strong>
        <p>Réponse(s) acceptée(s): {{ item.answers.join(' / ') }}</p>
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
  return props.exercise.items.every((_, index) => answers.value[index]?.trim())
})

function isAnswerCorrect(index) {
  const userAnswer = (answers.value[index] || '').trim().toLowerCase()
  const correctAnswers = props.exercise.items[index].answers.map(a => a.toLowerCase())
  return correctAnswers.includes(userAnswer)
}

const score = computed(() => {
  if (!validated.value) return 0
  const correct = props.exercise.items.filter((_, index) => isAnswerCorrect(index)).length
  return Math.round((correct / props.exercise.items.length) * 100)
})

function validate() {
  validated.value = true
  emit('validated', score.value)
}
</script>