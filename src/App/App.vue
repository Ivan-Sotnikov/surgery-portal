<script setup lang="ts"></script>

<template>
  <VApp>
    <DefaultLayout>
      <RouterView v-slot="{ Component, route }">
        <Transition appear mode="out-in" :name="'main'">
          <VContainer v-if="route.meta.isContainer">
            <Transition appear mode="out-in" :name="'main'"> <component :is="Component" /> </Transition>
          </VContainer>
          <component v-else :is="Component" />
        </Transition>
      </RouterView>
    </DefaultLayout>
    <DefaultFooter />
  </VApp>
</template>

<style>
.main-enter-active,
.main-leave-active {
  transition: opacity 0.7s ease;
}

.main-enter-from,
.main-leave-to {
  opacity: 0;
}
</style>
