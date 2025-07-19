<script lang="ts" setup>
import doctorImage from './assets/22_resized.jpg'
import educationMainImage from './assets/13_resized.jpg'
import aimMainImage from './assets/43_resized.jpg'
import educationImage_1 from './assets/education-1.jpg'
import educationImage_2 from './assets/education-2.jpg'
import educationImage_3 from './assets/education-3.jpg'
import educationImage_4 from './assets/education-4.jpg'

type CarouselItem = {
  altName: string
  image: string
}
const carouselItems: Array<CarouselItem> = [
  {
    image: educationImage_1,
    altName: 'Диплом спецмалиста'
  },
  {
    image: educationImage_2,
    altName: 'Диплом ординатора'
  },
  {
    image: educationImage_3,
    altName: 'Сертификат участника конгресса'
  },
  {
    image: educationImage_4,
    altName: 'Диплом медицинского университета Белграда'
  }
]
</script>
<template>
  <div>
    <VCard rounded="xl" border="md">
      <VRow dense class="d-flex align-center">
        <VCol cols="12" sm="4" xl="3" xxl="2" class="ma-0 pa-0">
          <VImg :src="doctorImage" cover class="h-100" min-height="100" max-height="400" />
        </VCol>
        <VCol cols="12" sm="8" xl="9">
          <VCardText class="text-md-h6 text-sm-start text-justify">
            <div class="font-weight-bold text-center text-sm-start">
              Меня зовут Григорян Грант Джонович, и я посвятил свою жизнь искусству пластической хирургии.
            </div>
            <div class="mt-4">
              Моя цель — помогать людям обрести уверенность в себе, подчеркивая природную красоту каждого пациента. Для
              меня важно не просто провести операцию, а создать гармоничный образ, который отражает индивидуальность и
              внутреннее состояние клиента.
            </div>
          </VCardText>
        </VCol>
      </VRow>
    </VCard>
    <div class="text-md-h4 text-lg-h3 text-sm-h6 my-md-16 my-6 my-sm-10 font-italic text-center">
      <VDivider />
      Искусство преображения. Мастерство безупречно.
      <VDivider />
    </div>
    <VRow class="d-flex align-center">
      <VCard rounded="xl" border="md">
        <VRow dense class="d-flex align-center justify-end">
          <VCol cols="12" sm="8" xl="9" order="2" order-sm="1">
            <VCardText class="text-md-h6 text-sm-end text-justify">
              <div class="font-weight-bold text-center text-sm-end">
                Образование играет ключевую роль в моей профессии.
              </div>
              <div class="mt-4">
                Я окончил Саратовский Государственный Медицинский Университет имени В.И.Разумовского, получив
                квалификацию врача-хирурга. Продолжаю совершенствовать свои навыки, регулярно участвуя в международных
                конференциях и семинарах, обмениваясь опытом с ведущими специалистами отрасли.
              </div>
            </VCardText>
          </VCol>
          <VCol cols="12" sm="4" xl="3" xxl="2" class="ma-0 pa-0" order="1" order-sm="2">
            <VImg :src="educationMainImage" cover class="h-100" min-height="100" max-height="400" />
          </VCol>
        </VRow>
      </VCard>
    </VRow>

    <div class="text-md-h4 text-lg-h3 text-sm-h6 my-md-16 my-6 my-sm-10 font-italic text-center">
      <VDivider />
      Индивидуальность — Твой главный тренд. Усилим Твои достоинства!
      <VDivider />
    </div>

    <VCard rounded="xl" border="md">
      <VRow dense class="d-flex align-center">
        <VCol cols="12" sm="4" xl="3" xxl="2" class="ma-0 pa-0">
          <VImg :src="aimMainImage" cover class="h-100" min-height="100" max-height="400" />
        </VCol>
        <VCol cols="12" sm="8" xl="9">
          <VCardText class="text-md-h6 text-sm-start text-justify">
            <div class="font-weight-bold text-center text-sm-start">
              Моя работа основана на глубоком уважении <br />
              к каждому пациенту.
            </div>
            <div class="mt-4">
              Перед операцией мы проводим тщательную консультацию, обсуждаем все нюансы и возможные риски, чтобы принять
              оптимальное решение вместе. Я убежден, что успех любой процедуры зависит не только от мастерства хирурга,
              но и от взаимопонимания с пациентом.
            </div>
          </VCardText>
        </VCol>
      </VRow>
    </VCard>

    <VCarousel class="mt-10 border-md rounded-xl" hide-delimiters cycle interval="4000">
      <VCarouselItem v-for="(item, key) in carouselItems" :key="key">
        <VImg :src="item.image" :alt="item.altName" />
      </VCarouselItem>
    </VCarousel>
    <div
      class="text-md-h4 text-lg-h3 text-sm-h6 my-md-16 my-6 my-sm-10 font-italic text-center d-flex flex-column align-center-justify-center"
    >
      <VDivider class="mb-2 mb-md-5" />
      Буду рад видеть вас на консультации!
      <VBtn
        text="Запись на консультацию"
        size="large"
        variant="outlined"
        :to="{ name: 'appointment' }"
        rounded="pill"
        class="mt-5"
      />
    </div>
  </div>
</template>
