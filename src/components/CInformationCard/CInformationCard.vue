<script setup lang="ts">
import { useTheme } from 'vuetify'
import defaultImage from './assets/defaultImage.jpg'
import lazyImage from './assets/lazyImage.jpg'

export type InformationCardContent = {
  image?: string
  imageAlt?: string
  title?: string
  text?: string
  orientation: 'start' | 'end'
  video?: string
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
      <VCol cols="12" sm="4" xl="3" xxl="2" class="ma-0 pa-0" :order-sm="content.orientation == 'end' ? 2 : undefined">
        <video
          :key="content.title"
          type="video/mp4"
          loop
          playsinline
          :muted="true"
          :autoplay="true"
          nodownload
          nofullscreen
          disablepictureinpicture
          preload="auto"
          :poster="defaultImage"
          :style="{
            width: display.smAndUp.value ? '80%' : '100%',
            'margin-left': content.orientation == 'end' && display.smAndUp.value ? '20%' : undefined
          }"
          style="top: 4px; position: relative"
          v-if="content.video"
        >
          <source :src="content.video" />
        </video>

        <VImg
          :src="content.image"
          :lazy-src="lazyImage"
          cover
          :class="display.smAndUp.value ? cardImageCGradientClass : undefined"
          class="h-100"
          style="z-index: 5"
          min-height="100"
          max-height="400"
          v-else
        />
      </VCol>
      <VCol cols="12" sm="8" xl="9" :order-sm="content.orientation == 'end' ? 1 : undefined">
        <VCardText
          class="text-md-h6 text-sm-start text-justify"
          :class="content.orientation == 'end' ? 'text-sm-end' : undefined"
        >
          <div
            class="font-weight-bold text-center"
            :class="content.orientation == 'end' ? 'text-sm-end' : 'text-sm-start'"
            v-if="display.smAndUp.value"
          >
            <slot name="title"> {{ content.title }}</slot>
          </div>
          <div class="mt-4">
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
