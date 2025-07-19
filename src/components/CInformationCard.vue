<script setup lang="ts">
export type InformationCardContent = {
  image?: string
  imageAlt?: string
  title?: string
  text?: string
  orientation?: 'start' | 'end'
  video?: string
}

const display = useDisplay()

defineProps<{ content: InformationCardContent }>()
</script>

<template>
  <VCard rounded="xl" border="md">
    <VRow dense class="d-flex align-center" :class="content.orientation == 'end' ? 'justify-end' : undefined">
      <VCol cols="12" sm="4" xl="3" xxl="2" class="ma-0 pa-0" :order-sm="content.orientation == 'end' ? 2 : undefined">
        <video
          type="video/mp4"
          loop
          muted
          autoplay
          :style="{
            width: display.smAndUp.value ? '80%' : '100%',
            'margin-left': content.orientation == 'end' ? '20%' : undefined
          }"
          style="top: 4px; position: relative"
          v-if="content.video"
        >
          <source :src="content.video" />
        </video>

        <VImg :src="content.image" cover class="h-100" min-height="100" max-height="400" v-else />
      </VCol>
      <VCol cols="12" sm="8" xl="9" :order-sm="content.orientation == 'end' ? 1 : undefined">
        <VCardText
          class="text-md-h6 text-sm-start text-justify"
          :class="content.orientation == 'end' ? 'text-sm-end' : undefined"
        >
          <div
            class="font-weight-bold text-center"
            :class="content.orientation == 'end' ? 'text-sm-end' : 'text-sm-start'"
          >
            <slot name="title"> {{ content.title }}</slot>
          </div>
          <div class="mt-4">
            <slot name="text">{{ content.text }}</slot>
          </div>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
