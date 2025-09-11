<script lang="ts" setup>
import { contacts } from '@/constants'
import type { RouteLocationRaw } from 'vue-router'
import { useTheme } from 'vuetify'
import { mainCredentials } from '@/constants'

const { global: themeGlobal } = useTheme()

const display = useDisplay()

const contactsArr = contacts.filter(
  item => item.type == 'instagramm' || item.type == 'telegram' || item.type == 'vk' || item.type == 'whatsapp'
)

interface MenuLink {
  to: RouteLocationRaw
  title: string
}

const menuLinks: Array<Array<MenuLink>> = [
  [
    { title: 'Главное меню', to: { name: 'main' } },
    { title: 'Обо мне', to: { name: 'about' } },
    { title: 'Мои работы', to: { name: 'portfolio' } }
  ],
  [
    { title: 'Пластика тела', to: { name: 'plastic/body' } },
    { title: 'Пластика груди', to: { name: 'plastic/mammo' } },
    { title: 'Пластика лица', to: { name: 'plastic/face' } }
  ],
  [
    { title: 'Подготовка к операции', to: { name: 'plastic/preparation' } },
    { title: 'Записаться на прием', to: { name: 'appointment' } },
    { title: 'Контакты', to: { name: 'contacts' } }
  ]
]

const textColor = computed(() => (themeGlobal.name.value == 'light' ? 'text-black' : 'text-white'))
</script>
<template>
  <VDivider thickness="3" />
  <VFooter color="secondary" min-height="100" class="w-100 d-flex flex-column pb-5 flex-grow-0">
    <VRow class="w-100" v-if="display.mdAndUp.value">
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
    <div class="mt-md-10 d-flex align-center flex-column flex-md-row">
      <VBtn
        :href="`mailto:${mainCredentials.email}`"
        :class="textColor"
        class="text-md-h5 text-decoration-none mr-md-15 order-2 order-md-1"
        variant="plain"
        :text="mainCredentials.email"
      />
      <div class="d-flex order-3 order-md-2 mt-2 mt-md-0">
        <VBtn v-for="(item, key) in contactsArr" :key="key" :icon="item.icon" class="mx-2" />
      </div>
      <VBtn
        :href="`tel:${mainCredentials.phone}`"
        class="text-md-h5 text-decoration-none ml-md-15 order-1 order-md-3"
        :class="textColor"
        variant="plain"
        :text="mainCredentials.normalizedPhone"
      />
    </div>
    <div style="position: absolute; bottom: 10px; right: 10px">© 2025</div>
  </VFooter>
</template>
