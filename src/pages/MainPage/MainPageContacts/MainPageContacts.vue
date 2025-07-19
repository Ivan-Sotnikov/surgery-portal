<script setup lang="ts">
import { mainCredentials } from '@/constants'
import { mdiAccountTieVoice, mdiMapMarker, mdiPhone } from '@mdi/js'

import DoctorIcon from '../../../../public/Logo.svg'
import { useTheme } from 'vuetify'
const { global: themeGlobal } = useTheme()

const display = useDisplay()

const textColor = computed(() => (themeGlobal.name.value == 'light' ? 'text-black' : 'text-white'))

const mapWidth = computed(() =>
  display.xlAndUp.value ? 1000 : display.lgAndUp.value ? 600 : display.mdAndUp.value ? 450 : '100%'
)
</script>

<template>
  <VContainer>
    <VCard>
      <VCardText>
        <VRow class="d-flex align-center">
          <VCol cols="12" order="2" order-sm="1" md="7">
            <div style="position: relative" class="pa-2">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=43.126788%2C44.189063&mode=search&oid=167351408524&ol=biz&source=serp_navig&z=15.01"
                :width="mapWidth"
                height="400"
                frameborder="0"
                allowfullscreen="true"
                style="position: relative"
              >
              </iframe>
            </div>
          </VCol>
          <VCol class="text-sm-h6 text-body-1" cols="12" order="1" order-sm="2" md="5">
            <div class="mb-6 d-flex align-center">
              <VImg :src="DoctorIcon" class="mr-2 flex-grow-0" height="24" width="30" />
              <div class="flex-grow-1">Григорян Грант Джонович</div>
            </div>
            <div class="mb-6 d-flex align-center">
              <VIcon :icon="mdiMapMarker" class="mr-2" />
              <div>{{ mainCredentials.address }}</div>
            </div>
            <div>
              <VBtn
                :href="`tel:${mainCredentials.phone}`"
                class="text-sm-h6 text-decoration-none text-body-1"
                :class="textColor"
                variant="plain"
                :text="mainCredentials.normalizedPhone"
                :prepend-icon="mdiPhone"
              />
            </div>
            <VBtn
              :to="{ name: 'appointment' }"
              :block="display.xs.value"
              text="Записаться на консультацию"
              class="mt-4 text-sm-h6 text-body-1 text-wrap"
              size="large"
              variant="outlined"
              :prepend-icon="display.smAndUp.value ? mdiAccountTieVoice : undefined"
            />
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VContainer>
</template>
