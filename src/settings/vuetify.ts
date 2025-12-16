import colors from 'vuetify/util/colors'

import 'vuetify/styles'
import './font.scss'
import './settings.scss'

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
        variables: { 'font-family': 'NunitoSans' },
        dark: false,
        colors: {
          primary: colors.grey.lighten4,
          secondary: colors.grey.lighten3,
          tertiary: colors.grey.lighten2,
          quaternary: colors.grey.darken4
        }
      },
      dark: {
        dark: true,
        variables: { 'font-family': 'NunitoSans' },
        colors: {
          primary: colors.shades.black,
          secondary: colors.grey.darken3,
          tertiary: colors.grey.darken2,
          quaternary: colors.grey.lighten4
        }
      }
    }
  }
})

document.documentElement.style.fontFamily = 'var(--v-font-family)'

export default vuetify
