import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App/App.vue'
import router from './router'

import colors from 'vuetify/util/colors'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.grey.lighten4,
          secondary: colors.grey.lighten3,
          tertiary: colors.grey.lighten2
        }
      },
      dark: {
        colors: {
          primary: colors.shades.black,
          secondary: colors.grey.darken3,
          tertiary: colors.grey.darken2
        }
      }
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
