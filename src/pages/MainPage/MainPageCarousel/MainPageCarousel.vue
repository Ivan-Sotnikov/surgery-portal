<script setup lang="ts">
import DefaultImage from '../MainPageAbout/assets/main_Image.png'

interface SliderItem {
  image: string
  title: string
  subtitle: Array<string>
}

const sliderItems: Array<SliderItem> = [
  {
    image: DefaultImage,
    title: 'Default Title',
    subtitle: ['Property 1', 'Property 2', 'Property 3']
  },
  {
    image: DefaultImage,
    title: 'Default Title',
    subtitle: ['Property 1', 'Property 2', 'Property 3']
  },
  {
    image: DefaultImage,
    title: 'Default Title',
    subtitle: ['Property 1', 'Property 2', 'Property 3']
  },
  {
    image: DefaultImage,
    title: 'Default Title',
    subtitle: ['Property 1', 'Property 2', 'Property 3']
  },
  {
    image: DefaultImage,
    title: 'Default Title',
    subtitle: ['Property 1', 'Property 2', 'Property 3']
  },
  {
    image: DefaultImage,
    title: 'Default Title',
    subtitle: ['Property 1', 'Property 2', 'Property 3']
  },
  {
    image: DefaultImage,
    title: 'Default Title',
    subtitle: ['Property 1', 'Property 2', 'Property 3']
  }
]
</script>

<template>
  <VContainer>
    <VLazy transition="mainPageBlock" :options="{ threshold: 1 }">
      <VSlideGroup>
        <VSlideGroupItem v-for="(item, key) in sliderItems" :key="key">
          <VImg height="400" width="200" :src="item.image" />
        </VSlideGroupItem>
      </VSlideGroup>
    </VLazy>
  </VContainer>
</template>

<style></style>
