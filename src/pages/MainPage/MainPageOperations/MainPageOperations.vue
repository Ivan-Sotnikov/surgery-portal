<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import bodyPlasticImg from './assets/body_plastic.jpg'
import facePlasticImg from './assets/face_plastic.jpg'
import mammoPlasticImg from './assets/mammo_plastic.jpg'

interface OperationButton {
  image: string
  title: string
  subtitle: string
  subtitleArray: Array<string>
  to: RouteLocationRaw
}

const display = useDisplay()

const operationButtons: Array<OperationButton> = [
  {
    image: facePlasticImg,
    title: 'Пластика лица',
    subtitle: 'Блефаропластика, смас-подтяжка лица, булхорн',
    subtitleArray: ['Блефаропластика', 'смас-подтяжка лица', 'булхорн'],
    to: { name: 'plastic/face' }
  },
  {
    image: mammoPlasticImg,
    title: 'Маммопластика',
    subtitle: 'Увеличение груди, подтяжка груди, уменьшение груди',
    subtitleArray: ['Увеличение груди', 'подтяжка груди', 'уменьшение груди'],
    to: { name: 'plastic/mammo' }
  },
  {
    image: bodyPlasticImg,
    title: 'Пластика тела',
    subtitle: 'Пластика живота, липомоделирование тела',
    subtitleArray: ['Пластика живота', 'липомоделирование тела'],
    to: { name: 'plastic/body' }
  }
]
</script>

<template>
  <VContainer>
    <div class="text-h4 text-sm-h2 text-center font-weight-regular mt-5 mb-12">Пластические операции</div>
    <VLazy transition="mainPageBlock" :options="{ threshold: 1 }">
      <VRow>
        <VCol v-for="(card, key) in operationButtons" :key="key" cols="12" md="4" class="pa-8 justify-center d-flex">
          <VHover>
            <template v-slot:default="{ isHovering, props }">
              <VCard :to="card.to" class="text-center" v-bind="props" :class="isHovering && 'elevation-10'" width="400">
                <VImg :src="card.image" :alt="card.title" class="d-flex align-center justify-center">
                  <Transition name="slide-x-reverse-transition">
                    <div
                      class="text-h6 ma-4 bg-grey-lighten-3 elevation-10 text-uppercase pa-4"
                      v-if="isHovering && display.mdAndUp.value"
                    >
                      <div v-for="(item, itemKey) in card.subtitleArray" :key="itemKey" class="ma-4">{{ item }}</div>
                    </div>
                  </Transition>
                </VImg>
                <VCardTitle class="text-uppercase">
                  {{ card.title }}
                </VCardTitle>
                <VCardText class="text-uppercase text text-subtitle-1" v-if="!display.smAndUp.value">
                  {{ card.subtitle }}
                </VCardText>
              </VCard>
            </template>
          </VHover>
        </VCol>
      </VRow>
    </VLazy>
  </VContainer>
</template>
