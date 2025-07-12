<script setup lang="ts"></script>

<template>
  <VApp class="">
    <DefaultLayout>
      <RouterView v-slot="{ Component }">
        <Transition appear mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </Transition>
      </RouterView>
    </DefaultLayout>
    <DefaultFooter class="flex-grow-0" />
  </VApp>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
