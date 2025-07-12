<script setup lang="ts">
import leftImage from './assets/26_resized.png'
import rightImage from './assets/25_resized.png'
</script>

<template>
  <VRow class="align-center" no-gutters>
    <VCol><VImg cover :src="leftImage" alt="left image" /></VCol>

    <VCol>
      <Transition appear name="name">
        <div class="text-h1 font-weight-regular">Грант Григорян</div>
      </Transition>
      <Transition appear name="plastic">
        <div class="text-h4 mt-4">Пластический хирург</div>
      </Transition>
    </VCol>
    <VCol><VImg cover :src="rightImage" alt="right image" /></VCol>
  </VRow>
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
