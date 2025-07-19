<script setup lang="ts">
import testImage from './assets/65_resized_trim.png'

const display = useDisplay()
const titleTopPosition = computed(
  () => `top: ${display.lgAndUp.value ? 50 : display.mdAndUp.value ? 90 : display.smAndUp.value ? 50 : 20}px`
)
</script>

<template>
  <VImg :src="testImage" max-height="500" cover>
    <Transition appear name="name">
      <div
        class="text-lg-h1 text-md-h2 text-sm-h3 text-h5 font-weight-regular text-black"
        style="position: relative; left: 35%"
        :style="titleTopPosition"
      >
        Грант Григорян
      </div>
    </Transition>
    <Transition appear name="plastic">
      <div
        class="text-lg-h4 text-md-h6 text-sm-h6 text-body-1 mt-2 mt-sm-4 text-black"
        style="position: relative; left: 35%"
        :style="titleTopPosition"
      >
        Пластический хирург
      </div>
    </Transition>
  </VImg>
</template>

<style>
.name-enter-from {
  opacity: 0;
}
.name-enter-to {
  opacity: 1;
  transition: all 2s ease-in;
  transition-delay: 0.5s;
}

.plastic-enter-from {
  opacity: 0;
}
.plastic-enter-to {
  opacity: 1;
  transition: all 2s ease-in;
  transition-delay: 1.5s;
}
</style>
