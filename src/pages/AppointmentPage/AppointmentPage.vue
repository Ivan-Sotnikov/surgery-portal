<script setup lang="ts">
import appointmentImage from './assets/69_resized.jpeg'
import type { VBtn } from 'vuetify/components'
import { mdiAlertCircleOutline, mdiCheck } from '@mdi/js'

const isAppointmentSuccess = ref<boolean>(true)
const isAppointmentReady = ref<boolean>(false)

const submitButtonProps = computed<VBtn['$props']>(() => {
  if (isAppointmentReady.value) {
    if (isAppointmentSuccess.value)
      return { text: 'Вы успешно записались', prependIcon: mdiCheck, color: 'success', readonly: true, variant: 'flat' }
    else {
      return {
        text: 'Произошла ошибка',
        prependIcon: mdiAlertCircleOutline,
        color: 'error',
        readonly: true,
        variant: 'flat'
      }
    }
  } else return { text: display.smAndUp.value ? 'Записаться на консультацию' : 'Записаться', variant: 'outlined' }
})
const display = useDisplay()
</script>

<template>
  <VCard rounded="xl">
    <VRow dense class="d-flex align-center">
      <VCol v-if="display.smAndUp.value" cols="12" md="6">
        <VImg :src="appointmentImage" cover :max-height="display.mdAndUp.value ? 1000 : 400" />
      </VCol>
      <VCol class="pa-4">
        <VCardText class="text-center text-sm-start">
          <div class="text-h6 text-lg-h4">Вы готовы сделать первый шаг навстречу новой версии себя?</div>
          <div class="mt-2 text-lg-h6 mt-xl-16">Запишитесь на бесплатную консультацию прямо сейчас!</div>
          <div class="mt-4 text-lg-h6 mt-xl-16">
            Я лично отвечу на все Ваши вопросы, проведу осмотр и предложу оптимальную стратегию лечения. Ваш комфорт и
            безопасность — мои главные приоритеты. Давайте вместе создадим ваш идеальный образ! Заполните форму обратной
            связи, и мы свяжемся с вами в ближайшее время.
          </div>
        </VCardText>
        <VCardActions class="d-flex flex-column mt-xl-16">
          <VTextField class="w-100" rounded="pill" variant="outlined" placeholder="Ваше имя"> </VTextField>
          <VTextField class="w-100" rounded="pill" variant="outlined" placeholder="Номер телефона"> </VTextField>
          <VBtn
            v-bind="submitButtonProps"
            rounded="pill"
            block
            class="py-5"
            size=""
            @click="isAppointmentReady = !isAppointmentReady"
          />
        </VCardActions>
      </VCol>
    </VRow>
  </VCard>
</template>
