<script setup lang="ts">
import { mainCredentials } from '@/constants'

const display = useDisplay()
</script>

<template>
  <VContainer>
    <VTimeline
      direction="vertical"
      size="x-large"
      align="start"
      justify="start"
      truncate-line="both"
      :side="display.smAndDown.value ? 'end' : undefined"
    >
      <VTimelineItem class="text-md-start">
        <div class="text-h6 text-md-h4 mb-3 mb-md-6">Запись на консультацию</div>
        <div class="text-md-h6">
          Вы ознакомились с моими работами, фотографиями до/после, и решили записаться на консультацию.
          <br />
          Для этого Вам необходимо перейти к
          <RouterLink class="text=quaternary" :to="{ name: 'appointment' }">форме записи</RouterLink> и оставить заявку,
          либо написать или позвонить по телефону
          <a class="text-quaternary" :href="`tel:${mainCredentials.phone}`">{{ mainCredentials.normalizedPhone }}</a>
        </div>
        <template #icon>
          <div class="text-primary font-weight-bold">1</div>
        </template>
      </VTimelineItem>
      <VTimelineItem :class="display.mdAndUp.value ? 'text-md-end' : 'text-md-start'">
        <div class="text-h6 text-md-h4 mb-3 mb-md-6">Консультация</div>
        <div class="text-md-h6">
          На первой консультации выстраиваются доверительные отношения между пациентом и хирургом, поэтому это одна из
          самых важных встреч.<br />
          Советую перед консультацией подготовить список вопросов, которые Вы хотели бы задать мне, подготовить
          фотографии примерного результата, который хотели бы получить.<br /><br />
          На консультации мы затронем не только эстетическую часть, но и вопросы, касающиеся вашего здоровья, поэтому
          если у Вас есть какие-либо хронические заболевания или перенесенные операции, то необходимо принести
          соответствующие документы.
          <br />
          Так же мы сможем запланировать дату будущей операции.
        </div>
        <template #icon>
          <div class="text-primary font-weight-bold">2</div>
        </template>
      </VTimelineItem>
      <VTimelineItem class="text-md-start">
        <div class="text-h6 text-md-h4 mb-3 mb-md-6">Подготовка к операции</div>
        <div class="text-md-h6">
          На консультации я дам список анализов, которые необходимо сдать перед операцией. Возможно, потребуются так же
          дополнительные обследования в зависимости от состояния Вашего здоровья.
          <br />
          С подробным описанием и популярными вопросами можно ознакомиться в разделе
          <RouterLink class="text-quaternay" :to="{ name: 'plastic/preparation' }"> Подготовка к операции.</RouterLink>
        </div>
        <template #icon>
          <div class="text-primary font-weight-bold">3</div>
        </template>
      </VTimelineItem>
      <VTimelineItem :class="display.mdAndUp.value ? 'text-md-end' : 'text-md-start'">
        <div class="text-h6 text-md-h4 mb-3 mb-md-6">Операция</div>
        <div class="text-md-h6">
          В день операции мы с Вами встретимся, я снова отвечу на все Ваши вопросы.
          <br />
          После Вы подписываете согласие на операцию, выполняется разметка и фотофиксация.
          <br />
          Далее Вас ждет консультация с анестезиологом и можно идти в операционную!
          <br />
          <br />
          <b>Наркоз</b>. В клиниках используется самый безопасный тип анестезии с применением препарата «Севоран»,
          который безопасен и успешно используется даже в детской анестезиологии. После наркоза у пациентов нет головных
          болей, тошноты и рвоты. Анестезиолог находится рядом с Вами в течение всей анестезии.
        </div>
        <template #icon>
          <div class="text-primary font-weight-bold">4</div>
        </template>
      </VTimelineItem>
      <VTimelineItem class="text-md-start">
        <div class="text-h6 text-md-h4 mb-3 mb-md-6">Реабилитация</div>
        <div class="text-md-h6">
          После операции Вас переведут в палату, где Вы будете постоянно под моим наблюдением и наблюдением персонала.
          <br />
          На следующий день мы проводим перевязку, назначим дату повторного осмотра и дам все необходимые рекомендации.
          <br />
          <br />
          Напоминаю, что <b>Я РЯДОМ</b> в течение всей реабилитации, пишите, задавайте вопросы, рассказывайте, что вас
          беспокоит.
          <br />
          <br />
          <b>Я ВСЕГДА</b> на связи со своими пациентами и оперативно выполняю необходимые действия и морально Вас
          поддержу.
        </div>
        <template #icon>
          <div class="text-primary font-weight-bold">5</div>
        </template>
      </VTimelineItem>
    </VTimeline>
  </VContainer>
</template>
