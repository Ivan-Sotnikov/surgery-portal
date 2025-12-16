import type { InformationCardContent } from '@/components/CInformationCard/CInformationCard.vue'
import doctorImage from '../assets/22_resized.jpeg'
import educationMainImage from '../assets/13_resized.jpeg'
import aimMainImage from '../assets/43_resized.jpeg'

import educationImage_1 from '../assets/education-1.jpeg'
import educationImage_2 from '../assets/education-2.jpeg'
import educationImage_3 from '../assets/education-3.jpeg'
import educationImage_4 from '../assets/education-4.jpeg'

type CarouselItem = {
  altName: string
  image: string
}

export const aboutCardsContent: Array<InformationCardContent> = [
  {
    image: doctorImage,
    imageAlt: 'Изображение хирурга',
    title: 'Меня зовут Григорян Грант Джонович, и я посвятил свою жизнь искусству пластической хирургии.',
    text: 'Моя цель — помогать людям обрести уверенность в себе, подчеркивая природную красоту каждого пациента. Для меня важно не просто провести операцию, а создать гармоничный образ, который отражает индивидуальность и внутреннее состояние клиента.',
    orientation: 'start'
  },
  {
    image: educationMainImage,
    imageAlt: 'Образование хирурга',
    title: 'Образование играет ключевую роль в моей профессии.',
    text: 'Я окончил Саратовский Государственный Медицинский Университет имени В.И.Разумовского, получив квалификацию врача-хирурга. Продолжаю совершенствовать свои навыки, регулярно участвуя в международных конференциях и конгрессах, обмениваясь опытом с ведущими специалистами отрасли.',
    orientation: 'end'
  },
  {
    image: aimMainImage,
    imageAlt: 'Цели работы хирурга',
    title: 'Моя работа основана на глубоком уважении к каждому пациенту.',
    text: 'Перед операцией мы проводим тщательную консультацию, обсуждаем все нюансы и возможные риски, чтобы принять оптимальное решение вместе. Я убежден, что успех любой процедуры зависит не только от мастерства хирурга, но и от взаимопонимания с пациентом.',
    orientation: 'start'
  }
]

export const doctorQoute = [
  'Искусство преображения. Мастерство безупречно.',
  'Индивидуальность — Твой главный тренд. Усилим Твои достоинства!',
  'Открой мир новых возможностей.<br/> Начнём с Твоей улыбки!'
]

export const carouselItems: Array<CarouselItem> = [
  {
    image: educationImage_1,
    altName: 'Диплом специалиста'
  },
  {
    image: educationImage_2,
    altName: 'Диплом ординатора'
  },
  {
    image: educationImage_3,
    altName: 'Сертификат участника конгресса'
  },
  {
    image: educationImage_4,
    altName: 'Диплом медицинского университета Белграда'
  }
]
