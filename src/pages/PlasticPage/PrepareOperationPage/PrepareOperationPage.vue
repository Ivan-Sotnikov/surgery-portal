<script setup lang="ts">
import { frequentlyAskedQuestions, cardsContentArray } from './constants'
</script>

<template>
  <div>
    <CInformationCard v-for="(card, key) in cardsContentArray" :key="key" :content="card" class="my-2 my-md-15" />

    <CFrequentlyAskedQuestions :questions="frequentlyAskedQuestions" class="mb-10" />
    <VDivider class="mb-2 mb-md-5" />
  </div>
</template>
