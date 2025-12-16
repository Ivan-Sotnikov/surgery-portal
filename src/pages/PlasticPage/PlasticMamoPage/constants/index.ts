import type { InformationCardContent } from '@/components/CInformationCard/CInformationCard.vue'
import mammoCardVideo1 from '@/pages/PlasticPage/PlasticMamoPage/assets/v01.mp4'
import mammoImage1 from '@/pages/PlasticPage/PlasticMamoPage/assets/63_resized.jpg'
import mammoVideo15 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo1.mp4'
import mammoVideo2 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo2.mp4'
import mammoVideo3 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo3.mp4'
import mammoVideo4 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo4.mp4'
import mammoVideo5 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo5.mp4'
import mammoVideo6 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo6.mp4'
import mammoVideo7 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo7.mp4'
import mammoVideo8 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo8.mp4'
import mammoVideo9 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo9.mp4'
import mammoVideo10 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo10.mp4'
import mammoVideo11 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo11.mp4'
import mammoVideo12 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo12.mp4'
import mammoVideo13 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo13.mp4'
import mammoVideo14 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo14.mp4'
import mammoVideo1 from '@/pages/PlasticPage/PlasticMamoPage/assets/mammo15.mp4'
import type { SliderItem } from '@/types'

export const cardsContentArray: Array<InformationCardContent> = [
  {
    video: mammoCardVideo1,
    title: 'Пластика груди',
    text: 'Маммопластика — одна из наиболее востребованных процедур в современной эстетической медицине. Она позволяет изменить размер, форму и положение молочных желез, помогая женщинам чувствовать себя уверенно и комфортно в собственном теле.',
    orientation: 'start'
  },
  {
    image: mammoImage1,
    imageAlt: 'Расчет маммопластики',
    title: 'Виды операций',
    text: 'Основные виды операций включают увеличение груди с использованием имплантатов, уменьшение объема молочной железы и подтяжку кожи. Каждая процедура требует индивидуального подхода и тщательного планирования.',
    orientation: 'end'
  }
]

export const sliderContent: Array<SliderItem> = [
  { image: mammoImage1, video: mammoVideo1 },
  { image: mammoImage1, video: mammoVideo2 },
  { image: mammoImage1, video: mammoVideo3 },
  { image: mammoImage1, video: mammoVideo4 },
  { image: mammoImage1, video: mammoVideo5 },
  { image: mammoImage1, video: mammoVideo6 },
  { image: mammoImage1, video: mammoVideo7 },
  { image: mammoImage1, video: mammoVideo8 },
  { image: mammoImage1, video: mammoVideo9 },
  { image: mammoImage1, video: mammoVideo10 },
  { image: mammoImage1, video: mammoVideo11 },
  { image: mammoImage1, video: mammoVideo12 },
  { image: mammoImage1, video: mammoVideo13 },
  { image: mammoImage1, video: mammoVideo14 },
  { image: mammoImage1, video: mammoVideo15 }
]
