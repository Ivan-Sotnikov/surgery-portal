<script lang="ts" setup>
import { navBarButtons } from '@/constants'
import type { MenuNavButton } from '@/types'
import { mdiChevronDown, mdiChevronUp, mdiMenu, mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'
import logoImage from '../../assets/Logo.svg'

import { useGoTo, useTheme } from 'vuetify'

import { syncRefs, useStorage } from '@vueuse/core'
import { useScroll } from 'vuetify/lib/composables/scroll.mjs'

const { global } = useTheme()

const sessionStorageTheme = useStorage(
  'theme',
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  sessionStorage,
  { mergeDefaults: false }
)
syncRefs(sessionStorageTheme, global.name)

const display = useDisplay()
const route = useRoute()
const navBarButtonsWidth = computed(() => {
  switch (display.name.value) {
    case 'md':
      return 'w-100'
    case 'xl':
    case 'xxl':
      return 'w-75'
    default:
      return 'w-100'
  }
})

const currentPageName = computed(() => {
  const pageTitle = ref()
  function findCurrentNavButton(navButtons: Array<MenuNavButton>): void {
    navButtons.forEach(item => {
      if (item.isMenu && item.navButtonsList?.length) findCurrentNavButton(item.navButtonsList)
      else if (item.name == route.name) pageTitle.value = item.title
    })
  }
  findCurrentNavButton(navBarButtons)
  return pageTitle.value
})

const { currentScroll } = useScroll({})
const goTo = useGoTo()
const isToUpButtonVisible = computed(() => display.smAndDown.value && currentScroll.value > 100)
</script>

<template>
  <VAppBar color="secondary">
    <template v-if="display.lgAndUp.value">
      <div class="w-100 d-flex justify-center">
        <div class="d-flex justify-space-around align-center" :class="navBarButtonsWidth">
          <template v-for="(button, key) in navBarButtons" :key="key">
            <template v-if="button.isMenu">
              <VMenu open-on-hover>
                <template v-slot:activator="{ props }">
                  <VBtn
                    v-bind="props"
                    :text="button.title"
                    :append-icon="mdiChevronDown"
                    variant="plain"
                    @click="$router.push({ name: button.name })"
                    :size="display.xlAndUp.value ? 'x-large' : 'large'"
                  />
                </template>
                <VList>
                  <VListItem v-for="item in button.navButtonsList" :key="item.name">
                    <VBtn :to="{ name: item.name }" :text="item.title" variant="plain" />
                  </VListItem>
                </VList>
              </VMenu>
            </template>
            <VBtn
              v-else
              :to="{ name: button.name }"
              :text="button.title"
              variant="plain"
              :size="display.xlAndUp.value ? 'x-large' : 'large'"
            />
            <VDivider vertical v-if="key != navBarButtons.length - 1" />
          </template>
        </div>
      </div>
      <VSwitch
        class="mr-4 justify-self-end"
        v-model="sessionStorageTheme"
        true-value="light"
        false-value="dark"
        :append-icon="sessionStorageTheme == 'dark' ? mdiWeatherNight : mdiWhiteBalanceSunny"
        hide-details
      />
    </template>
    <template v-else>
      <div class="w-100 d-flex justify-end align-center">
        <template v-if="$route.name != 'main'">
          <RouterLink :to="{ name: 'main' }" class="ml-3">
            <VImg :src="logoImage" width="36" />
          </RouterLink>
          <VSpacer />
        </template>
        <div class="text-h5 text-end">{{ currentPageName }}</div>
        <VMenu :close-on-content-click="false">
          <template v-slot:activator="{ props }">
            <VBtn :icon="mdiMenu" v-bind="props" />
          </template>
          <template v-slot:default="{ isActive }">
            <VList max-width="300" class="justify-end">
              <VListItem v-for="(mobileButton, key) in navBarButtons" :key="key" class="justify-end">
                <VListGroup v-if="mobileButton.isMenu">
                  <template v-slot:activator="{ props, isOpen }">
                    <VBtn
                      block
                      :text="mobileButton.title"
                      v-bind="props"
                      :append-icon="isOpen ? mdiChevronUp : mdiChevronDown"
                      variant="plain"
                      class="d-flex justify-end"
                    />
                  </template>
                  <div class="bg-secondary rounded-lg">
                    <VBtn
                      @click="
                        async () => {
                          await $router.push({ name: mobileButtonMenu.name })
                          isActive.value = false
                        }
                      "
                      block
                      :text="mobileButtonMenu.title"
                      v-for="(mobileButtonMenu, key) in mobileButton.navButtonsList"
                      :key="key"
                      variant="plain"
                      class="d-flex justify-end"
                    />
                  </div>
                </VListGroup>
                <VBtn
                  v-else
                  @click="
                    async () => {
                      await $router.push({ name: mobileButton.name })
                      isActive.value = false
                    }
                  "
                  :text="mobileButton.title"
                  variant="plain"
                  block
                  class="d-flex justify-end"
                />
              </VListItem>
              <VListItem class="justify-end d-flex ml-4">
                <VSwitch
                  class="mr-4"
                  v-model="sessionStorageTheme"
                  true-value="light"
                  false-value="dark"
                  :prepend-icon="sessionStorageTheme == 'dark' ? mdiWeatherNight : mdiWhiteBalanceSunny"
                  hide-details
                />
              </VListItem>
            </VList>
          </template>
        </VMenu>
      </div>
    </template>
  </VAppBar>
  <VMain class="bg-primary">
    <VSheet max-width="1980" class="mx-auto bg-transparent">
      <slot />
    </VSheet>
    <VBtn
      :icon="mdiChevronUp"
      position="fixed"
      style="bottom: 20px; left: 20px; z-index: 10"
      v-if="isToUpButtonVisible"
      @click="goTo(0, { duration: 500 })"
    />
  </VMain>
</template>
