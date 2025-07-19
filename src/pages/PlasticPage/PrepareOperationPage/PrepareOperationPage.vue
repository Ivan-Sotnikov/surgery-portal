<script setup lang="ts">
import type { InformationCardContent } from '@/components/CInformationCard.vue'
import preparationVideo1 from './assets/v04.mp4'
import preparationVideo2 from './assets/v07.mp4'

const cardsContentArray: Array<InformationCardContent> = [
  {
    video: preparationVideo1,
    title: 'Подготовка к операции',
    text: 'Правильная подготовка к операции является залогом успешного результата и быстрого восстановления. Пациентам рекомендуется пройти комплексное медицинское обследование, включающее анализы крови, ЭКГ и консультацию анестезиолога.'
  },
  {
    video: preparationVideo2,
    title: 'Важно',
    text: 'Важно следовать рекомендациям по питанию перед процедурой, отказаться от курения и приема некоторых лекарственных препаратов. Мы предоставляем подробную инструкцию и поддерживаем связь с вами на протяжении всего подготовительного периода.',
    orientation: 'end'
  }
]
</script>

<template>
  <div>
    <CInformationCard v-for="(card, key) in cardsContentArray" :key="key" :content="card" class="my-5 my-md-15" />
    <VDivider class="mb-2 mb-md-5" />
    <VBtn
      text="Запись на консультацию"
      size="large"
      block
      variant="outlined"
      :to="{ name: 'appointment' }"
      rounded="pill"
      class="my-5"
    />
  </div>
</template>
