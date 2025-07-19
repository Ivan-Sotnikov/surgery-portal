<script lang="ts" setup>
import type { InformationCardContent } from '@/components/CInformationCard.vue'
import mammoVideo from './assets/v01.mp4'
import mammoImage_1 from './assets/63_resized.jpg'
import mammoImage_2 from './assets/70_resized.jpg'
import CInformationCard from '@/components/CInformationCard.vue'

const sliderItems = [
  { image: mammoImage_2 },
  { image: mammoImage_1 },
  { image: mammoImage_2 },
  { image: mammoImage_1 },
  { image: mammoImage_2 },
  { image: mammoImage_1 },
  { image: mammoImage_2 }
]
const cardsContentArray: Array<InformationCardContent> = [
  {
    video: mammoVideo,
    title: 'Пластика груди',
    text: 'Маммопластика — одна из наиболее востребованных процедур в современной эстетической медицине. Она позволяет изменить размер, форму и положение молочных желез, помогая женщинам чувствовать себя уверенно и комфортно в собственном теле.'
  },
  {
    image: mammoImage_1,
    imageAlt: 'Расчет маммопластики',
    title: 'Виды операций',
    text: 'Основные виды операций включают увеличение груди с использованием имплантатов, уменьшение объема молочной железы и подтяжку кожи. Каждая процедура требует индивидуального подхода и тщательного планирования.',
    orientation: 'end'
  }
]
</script>

<template>
  <div class="mt-4 mt-md-10">
    <CInformationCard :content="cardsContentArray[0]" />
    <VSlideGroup class="my-6 my-md-16">
      <VSlideGroupItem>
        <div style="overflow: hidden" class="rounded-xl">
          <video type="video/mp4" loop muted autoplay height="400">
            <source :src="mammoVideo" />
          </video>
        </div>
      </VSlideGroupItem>
      <VSlideGroupItem v-for="(item, key) in sliderItems" :key="key">
        <VImg height="400" width="200" :src="item.image" class="mx-4" rounded="xl" cover />
      </VSlideGroupItem>
    </VSlideGroup>
    <CInformationCard :content="cardsContentArray[1]" class="mb-4 mb-md-10" />
  </div>
</template>
