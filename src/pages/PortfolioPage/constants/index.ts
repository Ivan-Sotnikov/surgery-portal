import { type InformationCardContent } from '@/components/CInformationCard/CInformationCard.vue'
import portfolioImage1 from '@/pages/PlasticPage/PlasticBodyPage/assets/29_resized.jpeg'
import porfolioVideo1 from '../assets/v05.mp4'
import type { SliderItem } from '@/types'

import { sliderContent as sliderContentBody } from '@/pages/PlasticPage/PlasticBodyPage/constants'
import { sliderContent as sliderContentFace } from '@/pages/PlasticPage/PlasticFacePage/constants'
import { sliderContent as sliderContentMammo } from '@/pages/PlasticPage/PlasticMamoPage/constants'

import feedbackImage1 from '../assets/feedback1.jpeg'
import feedbackVideo2 from '../assets/feedback2.mp4'
import feedbackVideo3 from '../assets/feedback3.mp4'
import feedbackVideo4 from '../assets/feedback4.mp4'
import feedbackVideo5 from '../assets/feedback5.mp4'
import feedbackVideo6 from '../assets/feedback6.mp4'
import feedbackVideo7 from '../assets/feedback7.mp4'
import feedbackVideo8 from '../assets/feedback8.mp4'
import feedbackVideo9 from '../assets/feedback9.mp4'
import feedbackVideo10 from '../assets/feedback10.mp4'
import feedbackVideo11 from '../assets/feedback11.mp4'
import feedbackVideo12 from '../assets/feedback12.mp4'
import feedbackVideo13 from '../assets/feedback13.mp4'
import feedbackVideo14 from '../assets/feedback14.mp4'
import feedbackVideo15 from '../assets/feedback15.mp4'

export const portfolioCardsContent: Array<InformationCardContent> = [
  {
    image: portfolioImage1,
    title: 'Мои работы',
    text: 'На этой странице представлены реальные результаты моих работ, демонстрирующие высокое качество и индивидуальный подход к каждому случаю. Галерея фотографий и видеороликов показывает различные этапы хирургического вмешательства и конечный результат.',
    orientation: 'end'
  },
  {
    video: porfolioVideo1,
    title: 'Лучший результат',
    text: 'Каждый случай уникален, и я горжусь возможностью делиться своими достижениями с потенциальными клиентами. Вы увидите, как мои пациенты обретают новую уверенность и радость жизни благодаря профессионально выполненным операциям.',
    orientation: 'start'
  }
]
type FeedbackContent = {
  title: string
  sliderContent: Array<SliderItem>
}

export const portfolioSliderContent: Array<FeedbackContent> = [
  {
    title: 'Отзывы',
    sliderContent: [
      { image: feedbackImage1 },
      { image: portfolioImage1, video: feedbackVideo2 },
      { image: portfolioImage1, video: feedbackVideo3 },
      { image: portfolioImage1, video: feedbackVideo4 },
      { image: portfolioImage1, video: feedbackVideo5 },
      { image: portfolioImage1, video: feedbackVideo6 },
      { image: portfolioImage1, video: feedbackVideo7 },
      { image: portfolioImage1, video: feedbackVideo8 },
      { image: portfolioImage1, video: feedbackVideo9 },
      { image: portfolioImage1, video: feedbackVideo10 },
      { image: portfolioImage1, video: feedbackVideo11 },
      { image: portfolioImage1, video: feedbackVideo12 },
      { image: portfolioImage1, video: feedbackVideo13 },
      { image: portfolioImage1, video: feedbackVideo14 },
      { image: portfolioImage1, video: feedbackVideo15 }
    ]
  },
  { title: 'Пластика тела', sliderContent: sliderContentBody },
  { title: 'Пластика лица', sliderContent: sliderContentFace },
  { title: 'Пластика груди', sliderContent: sliderContentMammo }
]
