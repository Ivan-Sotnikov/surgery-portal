<script lang="ts" setup>
import CInformationCard from '@/components/CInformationCard/CInformationCard.vue'

import { cardsContentArray, sliderContent } from './constants'
</script>

<template>
  <div>
    <CInformationCard :content="cardsContentArray[0]" class="my-2 my-md-15" />
    <VSlideGroup class="my-6 my-md-16">
      <VSlideGroupItem v-for="(item, key) in sliderContent" :key="key">
        <div style="overflow: hidden" class="rounded-xl mx-2" v-if="item.video">
          <video type="video/mp4" loop muted autoplay height="400" playsinline :poster="item.image" :src="item.video" />
        </div>
        <VImg height="400" width="200" :src="item.image" rounded="xl" cover v-else />
      </VSlideGroupItem>
    </VSlideGroup>
    <CInformationCard :content="cardsContentArray[1]" class="mb-4 mb-md-10" />
    <COperationsResult />
  </div>
</template>
