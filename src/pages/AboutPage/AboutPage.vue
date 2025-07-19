<script lang="ts" setup>
import educationImage_1 from './assets/education-1.jpg'
import educationImage_2 from './assets/education-2.jpg'
import educationImage_3 from './assets/education-3.jpg'
import educationImage_4 from './assets/education-4.jpg'

import { doctorQoute, aboutCardsContent } from './constants'

const contentArray = aboutCardsContent.map((item, index) => {
  return { card: item, quoute: doctorQoute[index] || undefined }
})

type CarouselItem = {
  altName: string
  image: string
}
const carouselItems: Array<CarouselItem> = [
  {
    image: educationImage_1,
    altName: 'Диплом специалиста'
  },
  {
    image: educationImage_2,
    altName: 'Диплом ординатора'
  },
  {
    image: educationImage_3,
    altName: 'Сертификат участника конгресса'
  },
  {
    image: educationImage_4,
    altName: 'Диплом медицинского университета Белграда'
  }
]
</script>
<template>
  <div class="mt-5 mt-md-10">
    <template v-for="(item, key) in contentArray" :key="key">
      <CInformationCard :content="item.card" />
      <div class="text-md-h4 text-lg-h3 text-sm-h6 my-md-16 my-6 my-sm-10 font-italic text-center">
        <VDivider />
        <div v-html="item.quoute" />
        <VDivider />
      </div>
    </template>
    <VCarousel class="mt-10 border-md rounded-xl" hide-delimiters cycle interval="4000">
      <VCarouselItem v-for="(item, key) in carouselItems" :key="key">
        <VImg :src="item.image" :alt="item.altName" />
      </VCarouselItem>
    </VCarousel>
    <div
      class="text-md-h4 text-lg-h3 text-sm-h6 my-md-16 my-6 my-sm-10 font-italic text-center d-flex flex-column align-center-justify-center"
    >
      <VDivider class="mb-2 mb-md-5" />
      Буду рад видеть вас на консультации!
      <VBtn
        text="Запись на консультацию"
        size="large"
        variant="outlined"
        :to="{ name: 'appointment' }"
        rounded="pill"
        class="mt-5"
      />
    </div>
  </div>
</template>
