<script setup lang="ts">
import { useIntervalFn } from '@vueuse/core'
import { sliderItems } from './constants/index'

const sliderItemsArray = ref(sliderItems)

function shiftSlides() {
  sliderItemsArray.value.push({
    ...sliderItemsArray.value[0],
    key: sliderItemsArray.value[sliderItemsArray.value.length - 1].key + 1
  })
  sliderItemsArray.value.shift()
}
useIntervalFn(
  () => {
    shiftSlides()
  },
  4000,
  { immediateCallback: true }
)
</script>

<template>
  <VContainer>
    <VLazy transition="mainPageBlock" :options="{ threshold: 1 }">
      <div class="d-flex overflow-hidden" transition="mainPageBlock" style="position: relative">
        <TransitionGroup name="list">
          <div
            v-for="item in sliderItemsArray"
            :key="item.key"
            class="mr-4 rounded-xl mx-2"
            style="height: 400px; min-width: 200px; width: 200px; overflow: hidden"
          >
            <div v-if="item.video">
              <video
                type="video/mp4"
                loop
                muted
                autoplay
                playsinline
                :poster="item.image"
                :src="item.video"
                style="min-width: 200px; min-height: 300px"
              />
            </div>
            <VImg width="100%" height="100%" :src="item.image" rounded="xl" cover v-else :alt="item.alt" />
          </div>
        </TransitionGroup>
      </div>
    </VLazy>
  </VContainer>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 4s linear;
}

.list-leave-to {
  transform: translateX(-216px);
}

/* .list-enter-from {
  transform: translateX(192px);
} */

.list-leave-active {
  position: absolute;
}
</style>
