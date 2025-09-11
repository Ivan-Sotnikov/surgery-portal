<script setup lang="ts">
import CInformationCard from '@/components/CInformationCard/CInformationCard.vue'
import image1 from '@/pages/PlasticPage/PlasticBodyPage/assets/29_resized.jpg'

const card = {
  image: image1,
  text: 'На этой странице представлены реальные результаты моих работ, демонстрирующие высокое качество и индивидуальный подход к каждому случаю. Галерея фотографий и видеороликов показывает различные этапы хирургического вмешательства и конечный результат. Каждый случай уникален, и я горжусь возможностью делиться своими достижениями с потенциальными клиентами. Вы увидите, как мои пациенты обретают новую уверенность и радость жизни благодаря профессионально выполненным операциям.',
  orientation: 'start'
}
</script>

<template>
  <div>
    <div>
      <CInformationCard :content="card"
        ><template #title>
          <div class="text-h5 text-md-h4">Мои Работы</div>
        </template>
      </CInformationCard>
    </div>
    <div class="mt-6 text-center w-100 text-h5 text-md-h4">Пластика лица</div>
    <VSlideGroup class="my-4 my-md-10">
      <VSlideGroupItem v-for="item in 20" :key="item">
        <VImg height="400" width="200" :src="image1" class="mx-4" rounded="xl" cover />
      </VSlideGroupItem>
    </VSlideGroup>
    <div class="mt-6 text-center w-100 text-h5 text-md-h4">Блефаропластика</div>
    <VSlideGroup class="my-4 my-md-10">
      <VSlideGroupItem v-for="item in 20" :key="item">
        <VImg height="400" width="200" :src="image1" class="mx-4" rounded="xl" cover />
      </VSlideGroupItem>
    </VSlideGroup>
    <div class="mt-6 text-center w-100 text-h5 text-md-h4">Маммопластика</div>
    <VSlideGroup class="my-4 my-md-10">
      <VSlideGroupItem v-for="item in 20" :key="item">
        <VImg height="400" width="200" :src="image1" class="mx-4" rounded="xl" cover />
      </VSlideGroupItem>
    </VSlideGroup>
    <div class="mt-6 text-center w-100 text-h5 text-md-h4">Абдоминопластика</div>
    <VSlideGroup class="my-4 my-md-10">
      <VSlideGroupItem v-for="item in 20" :key="item">
        <VImg height="400" width="200" :src="image1" class="mx-4" rounded="xl" cover />
      </VSlideGroupItem>
    </VSlideGroup>

    <VBtn
      text="Запись на консультацию"
      size="large"
      block
      variant="outlined"
      :to="{ name: 'appointment' }"
      rounded="pill"
      class="mt-5"
    />
  </div>
</template>
