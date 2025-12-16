<script setup lang="ts">
import { portfolioCardsContent, portfolioSliderContent } from './constants'
</script>

<template>
  <div>
    <CInformationCard :content="card" v-for="(card, key) in portfolioCardsContent" :key />
    <template v-for="(slider, key) in portfolioSliderContent" :key>
      <div class="mt-6 text-center w-100 text-h5 text-md-h4">{{ slider.title }}</div>
      <VDivider />
      <VSlideGroup class="my-6 my-md-16">
        <VSlideGroupItem v-for="(item, key) in slider.sliderContent" :key="key">
          <div style="overflow: hidden" class="rounded-xl mx-2" v-if="item.video">
            <video
              type="video/mp4"
              loop
              muted
              autoplay
              height="400"
              playsinline
              :poster="item.image"
              :src="item.video"
            />
          </div>
          <VImg height="400" width="200" :src="item.image" rounded="xl" cover v-else />
        </VSlideGroupItem>
      </VSlideGroup>
    </template>

    <VBtn
      text="Запись на консультацию"
      size="large"
      block
      variant="outlined"
      :to="{ name: 'appointment' }"
      rounded="pill"
      class="mt-5"
    />
  </div>
</template>
