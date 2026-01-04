<template>
  <div style="border: 1px solid #000; padding: 20px; margin: 20px 0;">
    <h3>{{ exercise.question }}</h3>
    
    <div v-for="(option, index) in exercise.options" :key="index" style="margin: 10px 0;">
      <label style="display: block; padding: 10px; border: 1px solid #000; cursor: pointer;">
        <input 
          type="radio" 
          :name="'q-' + exercise.id"
          :value="index"
          v-model="selectedAnswer"
          :disabled="validated"
        />
        {{ option }}
      </label>
    </div>
    
    <button 
      v-if="!validated"
      @click="validate"
      :disabled="selectedAnswer === null"
      style="margin-top: 15px; padding: 8px 16px; border: 1px solid #000;"
    >
      Valider
    </button>
    
    <div v-if="validated" style="margin-top: 15px; padding: 15px; border: 1px solid #000;">
      <strong v-if="isCorrect">✓ Correct!</strong>
      <strong v-else>✗ Incorrect</strong>
      
      <p style="margin-top: 10px;">{{ exercise.explanation }}</p>
      
      <p v-if="!isCorrect" style="margin-top: 10px;">
        <strong>Bonne réponse:</strong> {{ exercise.options[exercise.correct] }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  exercise: Object
})

const emit = defineEmits(['validated'])

const selectedAnswer = ref(null)
const validated = ref(false)

const isCorrect = computed(() => selectedAnswer.value === props.exercise.correct)

function validate() {
  validated.value = true
  emit('validated', isCorrect.value ? 100 : 0)
}
</script>