<script setup lang="ts">
import resultImage from './assets/60_resized.jpeg'
const { smAndDown } = useDisplay()
import { mdiArrowRight } from '@mdi/js'
</script>

<template>
  <CInformationCard
    :content="{
      title: 'Результат работ',
      orientation: 'start',
      image: resultImage
    }"
  >
    <template #text>
      <div>С результатом проведенных мною операций можно ознакомиться в разделе «Мои работы».</div>
      <VBtn
        :to="{ name: 'portfolio' }"
        size="x-large"
        variant="outlined"
        rounded="pill"
        class="mt-6"
        :block="smAndDown"
        :append-icon="mdiArrowRight"
        :text="smAndDown ? 'Мои работы' : 'Перейти в раздел «Мои работы»'"
      />
    </template>
  </CInformationCard>
</template>
