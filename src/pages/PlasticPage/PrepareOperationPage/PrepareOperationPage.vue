<script setup lang="ts">
import type { InformationCardContent } from '@/components/CInformationCard/CInformationCard.vue'
import preparationVideo1 from './assets/v04.mp4'
import preparationVideo2 from './assets/v07.mp4'
import type { Question } from '@/components/CFrequentlyAskedQuestions/CFrequentlyAskedQuestions.vue'

const cardsContentArray: Array<InformationCardContent> = [
  {
    video: preparationVideo2,
    title: 'Подготовка к операции',
    text: 'Правильная подготовка к операции является залогом успешного результата и быстрого восстановления. Пациентам рекомендуется пройти комплексное медицинское обследование, включающее анализы крови, ЭКГ и консультацию анестезиолога.',
    orientation: 'start'
  },
  {
    video: preparationVideo1,
    title: 'Важно',
    text: 'Важно следовать рекомендациям по питанию перед процедурой, отказаться от курения и приема некоторых лекарственных препаратов. Мы предоставляем подробную инструкцию и поддерживаем связь с вами на протяжении всего подготовительного периода.',
    orientation: 'end'
  }
]

const frequentlyAskedQuestions: Array<Question> = [
  {
    question: 'Вопрос номер 1',
    answer: 'Ответ номер 1'
  },

  {
    question: 'Вопрос номер 2',
    answer: 'Ответ номер 2'
  },

  {
    question: 'Вопрос номер 3',
    answer: 'Ответ номер 3'
  }
]
</script>

<template>
  <div>
    <CInformationCard v-for="(card, key) in cardsContentArray" :key="key" :content="card" class="my-2 my-md-15" />

    <CFrequentlyAskedQuestions :questions="frequentlyAskedQuestions" class="mb-10" />
    <VDivider class="mb-2 mb-md-5" />
  </div>
</template>
