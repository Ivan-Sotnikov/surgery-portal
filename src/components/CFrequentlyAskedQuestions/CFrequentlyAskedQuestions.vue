<script setup lang="ts">
import type { PropType } from 'vue'
import { VExpansionPanel } from 'vuetify/components'

export interface Question {
  question: string
  answer: string
}

defineProps({
  questions: {
    required: true,
    type: Array as PropType<Array<Question>>
  }
})
</script>

<template>
  <VExpansionPanels rounded="lg">
    <VExpansionPanel v-for="(item, key) in questions" :key="key">
      <template #title>
        <div class="text-md-h6 font-weight-bold">{{ item.question }}</div>
      </template>
      <template #text>
        <VDivider />
        <div class="text-md-h6">{{ item.answer }}</div>
      </template>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
