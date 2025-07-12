import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import eslintrcImport from './.eslint.import.json' assert { type: 'json' }

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs([
  {
    ignores: ['@types/import.components.d.ts'],
    name: 'base-eslint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    languageOptions: {
      globals: { ...eslintrcImport.globals, ...globals.browser }
    },
    rules: {
      'vue/block-order': ['error', { order: ['script', 'template'] }]
    }
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting
])
