<script lang="ts" setup>
import type { InformationCardContent } from '@/components/CInformationCard/CInformationCard.vue'
import faceImage_1 from './assets/33_resized.jpg'
import faceImage_2 from './assets/67_resized.jpg'
import CInformationCard from '@/components/CInformationCard/CInformationCard.vue'

const sliderItems = [
  { image: faceImage_1 },
  { image: faceImage_1 },
  { image: faceImage_1 },
  { image: faceImage_1 },
  { image: faceImage_1 },
  { image: faceImage_1 },
  { image: faceImage_1 }
]
const cardsContentArray: Array<InformationCardContent> = [
  {
    image: faceImage_1,
    imageAlt: 'Исследование лица',
    title: 'Пластика лица',
    text: 'Молодость и свежесть лица — мечта многих женщин и мужчин. Современные технологии позволяют эффективно бороться с возрастными изменениями, устраняя морщины, подтягивая кожу и восстанавливая четкость овала лица.',
    orientation: 'start'
  },
  {
    image: faceImage_2,
    imageAlt: 'Модель лица',
    title: 'Виды операций',
    text: 'Наиболее распространенные операции включают блефаропластику (коррекция век), ринопластику (исправление формы носа), фейслифтинг (подтяжка лица и шеи) и отопластику (коррекция ушных раковин).',
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
