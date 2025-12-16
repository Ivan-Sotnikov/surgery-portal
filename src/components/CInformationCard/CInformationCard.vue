<script setup lang="ts">
import { useTheme } from 'vuetify'
import defaultPosterImage from './assets/default-image.jpeg'
import defaultLazyImage from './assets/lazyImage.jpg'

export type InformationCardContent = {
  image?: string
  lazyImage?: string
  imageAlt?: string
  title?: string
  text?: string
  orientation: 'start' | 'end'
  video?: string
  posterImage?: string
}

const display = useDisplay()
const { global } = useTheme()

const props = defineProps({
  content: {
    required: true,
    type: Object as PropType<InformationCardContent>
  }
})

const cardImageCGradientClass = computed(() => `bg-gradient-${global.name.value}-${props.content.orientation}`)
</script>

<template>
  <div class="rounded-xl d-flex flex-column flex-sm-row align-center" style="overflow: hidden">
    <div class="text-center font-weight-bold my-4" v-if="display.xs.value">{{ content.title }}</div>
    <VRow dense class="d-flex align-center" :class="content.orientation == 'end' ? 'justify-end' : undefined">
      <VCol cols="12" sm="5" xl="4" xxl="3" class="ma-0 pa-0" :order-sm="content.orientation == 'end' ? 2 : undefined">
        <template v-if="content.video">
          <video
            :key="content.title"
            type="video/mp4"
            muted
            loop
            playsinline
            :autoplay="true"
            :src="content.video"
            :poster="content.posterImage ?? defaultPosterImage"
            style="top: 4px; position: relative; width: 100%"
          />
        </template>

        <VImg
          :src="content.image"
          :lazy-src="content.lazyImage ?? defaultLazyImage"
          cover
          :class="display.smAndUp.value ? cardImageCGradientClass : undefined"
          class="h-100"
          style="z-index: 5"
          min-height="100"
          max-height="500"
          v-else
        />
      </VCol>
      <VCol
        cols="12"
        sm="7"
        xl="8"
        xxl="9"
        :order-sm="content.orientation == 'end' ? 1 : undefined"
        class="px-sm-8 px-4"
      >
        <VCardText
          class="text-md-h6 text-sm-start text-justify px-0"
          :class="content.orientation == 'end' ? 'text-sm-end' : undefined"
        >
          <div
            class="font-weight-bold text-center text-md-h4 text-sm-h6"
            :class="content.orientation == 'end' ? 'text-sm-end' : 'text-sm-start'"
            v-if="display.smAndUp.value"
          >
            <slot name="title"> {{ content.title }}</slot>
            <VDivider />
          </div>

          <div class="mt-4 text-sm-h6 tedt-md-h5">
            <slot name="text">{{ content.text }}</slot>
          </div>
        </VCardText>
      </VCol>
    </VRow>
  </div>
</template>

<style>
.bg-gradient-light-end::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  z-index: 10;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 75%, rgba(245, 245, 245, 1) 100%);
}
.bg-gradient-dark-end::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  z-index: 10;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 1) 100%);
}
.bg-gradient-light-start::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  z-index: 10;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 75%, rgba(245, 245, 245, 1) 100%);
}
.bg-gradient-dark-start::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  z-index: 10;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 1) 100%);
}
</style>
