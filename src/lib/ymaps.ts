import * as Vue from 'vue'

import a from '@yandex/ymaps3-types'

console.log(a)

const [ymaps3Vue] = await Promise.all([ymaps3.import('@yandex/ymaps3-vuefy'), ymaps3.ready])

export const vuefy = ymaps3Vue.vuefy.bindTo(Vue)
export const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapContainer } =
  vuefy.module(ymaps3)
