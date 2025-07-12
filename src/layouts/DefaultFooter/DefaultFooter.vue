<script lang="ts" setup>
import { contacts } from '@/constants'
import type { RouteLocationRaw } from 'vue-router'
import { useTheme } from 'vuetify'

const { global: themeGlobal } = useTheme()

const contactsArr = contacts.filter(
  item => item.type == 'instagramm' || item.type == 'telegram' || item.type == 'vk' || item.type == 'whatsapp'
)

interface MenuLink {
  to: RouteLocationRaw
  title: string
}

const menuLinks: Array<Array<MenuLink>> = [
  [
    { title: 'Главное меню', to: { name: '' } },
    { title: 'Обо мне', to: { name: '' } },
    { title: 'Мои работы', to: { name: '' } }
  ],
  [
    { title: 'Пластика тела', to: { name: '' } },
    { title: 'Пластика груди', to: { name: '' } },
    { title: 'Пластика лица', to: { name: '' } }
  ],
  [
    { title: 'Подготовка к операции', to: { name: '' } },
    { title: 'Записаться на прием', to: { name: '' } },
    { title: 'Контакты', to: { name: '' } }
  ]
]

const textColor = computed(() => (themeGlobal.name.value == 'light' ? 'text-black' : 'text-white'))
</script>
<template>
  <VFooter
    :color="themeGlobal.name.value == 'light' ? 'grey-lighten-3' : undefined"
    min-height="100"
    class="w-100 d-flex flex-column pb-5"
  >
    <VRow class="w-100">
      <VCol v-for="(column, columnKey) in menuLinks" :key="columnKey" class="d-flex flex-column align-center" cols="4">
        <VBtn
          variant="plain"
          class="text-subtitle-1"
          :class="textColor"
          v-for="(link, linkKey) in column"
          :key="linkKey"
          :to="link.to"
          >{{ link.title }}</VBtn
        >
      </VCol>
    </VRow>
    <div class="mt-10 d-flex align-center">
      <VBtn
        href="mailto:emailGrantik@mail.ru"
        :class="textColor"
        class="text-h5 text-decoration-none mr-15"
        variant="plain"
      >
        emailGrantik@mail.ru
      </VBtn>
      <VBtn v-for="(item, key) in contactsArr" :key="key" :icon="item.icon" class="mr-5" />
      <VBtn href="tel:89179829558" class="text-h5 text-decoration-none ml-15" :class="textColor" variant="plain">
        +7(917)982-95-58
      </VBtn>
    </div>
    <div style="position: absolute; bottom: 0; right: 0">© 2025</div>
  </VFooter>
</template>
