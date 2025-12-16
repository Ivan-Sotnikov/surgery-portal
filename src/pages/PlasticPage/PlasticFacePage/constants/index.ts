import type { InformationCardContent } from '@/components/CInformationCard/CInformationCard.vue'
import faceImage1 from '@/pages/PlasticPage/PlasticFacePage/assets/33_resized.jpeg'
import faceImage2 from '@/pages/PlasticPage/PlasticFacePage/assets/67_resized.jpeg'
import faceVideo1 from '@/pages/PlasticPage/PlasticFacePage/assets/face1.mp4'
import faceVideo2 from '@/pages/PlasticPage/PlasticFacePage/assets/face2.mp4'
import faceVideo3 from '@/pages/PlasticPage/PlasticFacePage/assets/face3.mp4'
import faceVideo4 from '@/pages/PlasticPage/PlasticFacePage/assets/face4.mp4'
import faceVideo5 from '@/pages/PlasticPage/PlasticFacePage/assets/face5.mp4'
import faceVideo6 from '@/pages/PlasticPage/PlasticFacePage/assets/face6.mp4'
import faceVideo7 from '@/pages/PlasticPage/PlasticFacePage/assets/face7.mp4'
import faceVideo8 from '@/pages/PlasticPage/PlasticFacePage/assets/face8.mp4'
import faceVideo9 from '@/pages/PlasticPage/PlasticFacePage/assets/face9.mp4'
import faceVideo10 from '@/pages/PlasticPage/PlasticFacePage/assets/face10.mp4'

import type { SliderItem } from '@/types'

export const cardsContentArray: Array<InformationCardContent> = [
  {
    image: faceImage1,
    imageAlt: 'Исследование лица',
    title: 'Пластика лица',
    text: 'Молодость и свежесть лица — мечта многих женщин и мужчин. Современные технологии позволяют эффективно бороться с возрастными изменениями, устраняя морщины, подтягивая кожу и восстанавливая четкость овала лица.',
    orientation: 'start'
  },
  {
    image: faceImage2,
    imageAlt: 'Модель лица',
    title: 'Виды операций',
    text: 'Наиболее распространенные операции включают блефаропластику (коррекция век), ринопластику (исправление формы носа), фейслифтинг (подтяжка лица и шеи) и отопластику (коррекция ушных раковин).',
    orientation: 'end'
  }
]

export const sliderContent: Array<SliderItem> = [
  { image: faceImage1, video: faceVideo1 },
  { image: faceImage1, video: faceVideo2 },
  { image: faceImage1, video: faceVideo3 },
  { image: faceImage1, video: faceVideo4 },
  { image: faceImage1, video: faceVideo5 },
  { image: faceImage1, video: faceVideo6 },
  { image: faceImage1, video: faceVideo7 },
  { image: faceImage1, video: faceVideo8 },
  { image: faceImage1, video: faceVideo9 },
  { image: faceImage1, video: faceVideo10 }
]
