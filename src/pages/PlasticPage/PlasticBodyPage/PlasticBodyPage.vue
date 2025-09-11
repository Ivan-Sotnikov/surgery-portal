<script lang="ts" setup>
import type { InformationCardContent } from '@/components/CInformationCard/CInformationCard.vue'
import bodyImage_1 from './assets/29_resized.jpg'
import bodyImage_2 from './assets/85_resized.jpg'
import CInformationCard from '@/components/CInformationCard/CInformationCard.vue'

const sliderItems = [
  { image: bodyImage_1 },
  { image: bodyImage_1 },
  { image: bodyImage_1 },
  { image: bodyImage_1 },
  { image: bodyImage_1 },
  { image: bodyImage_1 }
]
const cardsContentArray: Array<InformationCardContent> = [
  {
    image: bodyImage_1,
    imageAlt: 'Исследование тела',
    title: 'Пластика тела',
    text: 'Коррекция контуров фигуры помогает достичь идеальных пропорций тела. Липосакция, абдоминопластика (подтяжка живота), брахиопластика (коррекция рук) и другие вмешательства позволяют устранить локальные жировые отложения и улучшить тонус кожи.',
    orientation: 'start'
  },
  {
    image: bodyImage_2,
    imageAlt: 'Обследование тела',
    title: 'Результат',
    text: 'Эти процедуры часто выполняются комплексно, обеспечивая максимальный эффект и минимизируя реабилитационный период.',
    orientation: 'end'
  }
]
</script>

<template>
  <div class="my-2 my-md-15">
    <CInformationCard :content="cardsContentArray[0]" />
    <VSlideGroup class="my-4 my-md-10">
      <VSlideGroupItem v-for="(item, key) in sliderItems" :key="key">
        <VImg height="400" width="200" :src="item.image" class="mx-4" rounded="xl" cover />
      </VSlideGroupItem>
    </VSlideGroup>
    <CInformationCard :content="cardsContentArray[1]" class="mb-4 mb-md-10" />
  </div>
</template>
