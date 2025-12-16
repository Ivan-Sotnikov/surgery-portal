import type { InformationCardContent } from '@/components/CInformationCard/CInformationCard.vue'
import bodyImage1 from '@/pages/PlasticPage/PlasticBodyPage/assets/29_resized.jpg'
import bodyImage2 from '@/pages/PlasticPage/PlasticBodyPage/assets/85_resized.jpg'
import bodyVideo1 from '@/pages/PlasticPage/PlasticBodyPage/assets/body1.mp4'
import bodyVideo2 from '@/pages/PlasticPage/PlasticBodyPage/assets/body2.mp4'
import bodyVideo3 from '@/pages/PlasticPage/PlasticBodyPage/assets/body3.mp4'
import bodyVideo4 from '@/pages/PlasticPage/PlasticBodyPage/assets/body4.mp4'
import bodyVideo5 from '@/pages/PlasticPage/PlasticBodyPage/assets/body5.mp4'
import bodyVideo6 from '@/pages/PlasticPage/PlasticBodyPage/assets/body6.mp4'
import bodyVideo7 from '@/pages/PlasticPage/PlasticBodyPage/assets/body7.mp4'
import bodyVideo8 from '@/pages/PlasticPage/PlasticBodyPage/assets/body8.mp4'
import bodyVideo9 from '@/pages/PlasticPage/PlasticBodyPage/assets/body9.mp4'
import bodyVideo10 from '@/pages/PlasticPage/PlasticBodyPage/assets/body10.mp4'
import bodyVideo11 from '@/pages/PlasticPage/PlasticBodyPage/assets/body11.mp4'
import bodyVideo12 from '@/pages/PlasticPage/PlasticBodyPage/assets/body12.mp4'
import type { SliderItem } from '@/types'

export const cardsContentArray: Array<InformationCardContent> = [
  {
    image: bodyImage1,
    imageAlt: 'Исследование тела',
    title: 'Пластика тела',
    text: 'Коррекция контуров фигуры помогает достичь идеальных пропорций тела. Липосакция, абдоминопластика (подтяжка живота), брахиопластика (коррекция рук) и другие вмешательства позволяют устранить локальные жировые отложения и улучшить тонус кожи.',
    orientation: 'start'
  },
  {
    image: bodyImage2,
    imageAlt: 'Обследование тела',
    title: 'Результат',
    text: 'Эти процедуры часто выполняются комплексно, обеспечивая максимальный эффект и минимизируя реабилитационный период.',
    orientation: 'end'
  }
]

export const sliderContent: Array<SliderItem> = [
  { image: bodyImage1, video: bodyVideo1 },
  { image: bodyImage1, video: bodyVideo2 },
  { image: bodyImage1, video: bodyVideo3 },
  { image: bodyImage1, video: bodyVideo4 },
  { image: bodyImage1, video: bodyVideo5 },
  { image: bodyImage1, video: bodyVideo6 },
  { image: bodyImage1, video: bodyVideo7 },
  { image: bodyImage1, video: bodyVideo8 },
  { image: bodyImage1, video: bodyVideo9 },
  { image: bodyImage1, video: bodyVideo10 },
  { image: bodyImage1, video: bodyVideo11 },
  { image: bodyImage1, video: bodyVideo12 }
]
