<script setup lang="ts"></script>

<template>
  <div>
    <MainPageBanner />
    <MainPageAbout />
    <MainPageOperations class="mt-10" />
    <MainPageCarousel class="mt-10" />
    <MainPageTimeline />
    <MainPageContacts />
  </div>
</template>

<style>
.mainPageBlock-enter-active,
.mainPageBlock-leave-active {
  transition: opacity 3s ease;
}

.mainPageBlock-enter-from,
.mainPageBlock-leave-to {
  opacity: 0;
}
</style>
