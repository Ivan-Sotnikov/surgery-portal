import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'
import vuetify from 'vite-plugin-vuetify'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteEjsPlugin as EJS } from 'vite-plugin-ejs'

// https://vite.dev/config/
export default defineConfig(config => {
  const env = loadEnv(config.mode, process.cwd(), '')
  return {
    base: env.PUBLIC_PATH,
    server: {
      port: 3003
    },
    plugins: [
      vue(),
      vueDevTools(),
      EJS(config => {
        return {
          base: config.base,
          keywords: 'пластический хирург, хирургия, пластика, григорян, грант, джонович',
          title: config.env.VITE_APP_TITLE,
          tools: config.env.VITE_APP_DEV_TOOLS_CONNECT
        }
      }),
      VitePWA({
        includeAssets: ['/favicon.png'],
        manifest: {
          background_color: '#F6F7F8',
          icons: [
            {
              purpose: 'any maskable',
              sizes: '180x180',
              src: '/icons/apple-touch-icon-180x180.png',
              type: 'image/png'
            }
          ],
          lang: 'ru',
          name: 'SurgeryGrant',
          short_name: 'SG',
          theme_color: '#433B97'
        },
        mode: 'production',
        registerType: 'autoUpdate',
        strategies: 'generateSW'
      }),
      vuetify({ autoImport: true }),
      Components({
        dts: '@types/import.components.d.ts',
        // NOTE: _ служит для определения дочерних компонент, не для общего использования
        globs: ['src/components/**/!(_)*.vue', 'src/pages/**/!(_)*.vue', 'src/layouts/**/!(_)*.vue'],
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView']
          }
          // {
          //   from: 'ymaps3',
          //   names: ['YMap', 'YMapDefaultSchemeLayer', 'YMapDefaultFeaturesLayer', 'YMapMarker']
          // }
        ]
      }),
      AutoImport({
        dts: '@types/import.d.ts',
        eslintrc: {
          enabled: true,
          filepath: '.eslintrc.import.json',
          globalsPropValue: true
        },
        imports: ['vue', 'vue-router', { vuetify: ['useDisplay', 'useLayout'] }]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        vue: 'vue/dist/vue.esm-bundler.js'
      }
    }
  }
})
