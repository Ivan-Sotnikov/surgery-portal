<script setup lang="ts">
import { navBarButtons } from '@/constants'

const navButtons = navBarButtons.find(item => item.name == 'plastic')?.navButtonsList

const display = useDisplay()
</script>

<template>
  <div>
    <div class="d-flex justify-space-between mt-5" v-if="display.mdAndUp.value">
      <VBtn
        v-for="(button, key) in navButtons"
        :key="key"
        :to="{ name: button.name }"
        :text="button.title"
        variant="text"
      />
    </div>
    <VDivider />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" appear mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
