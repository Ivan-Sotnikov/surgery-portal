import type { MenuNavButton } from '@/types'

import telegramQR from '../layouts/DefaultFooter/assets/t_me-plastic_grant.jpg'
import instagrammQR from '../layouts/DefaultFooter/assets/IMG_3189.jpg'

export const navBarButtons: Array<MenuNavButton> = [
  { name: 'main', title: 'Главная страница' },
  { name: 'about', title: 'Обо мне' },
  {
    name: 'plastic',
    title: 'Операции',
    isMenu: true,
    navButtonsList: [
      { name: 'plastic/body', title: 'Пластика тела' },
      { name: 'plastic/face', title: 'Пластика лица' },
      { name: 'plastic/mammo', title: 'Пластика груди' },
      { name: 'plastic/preparation', title: 'Подготовка к операции' }
    ]
  },
  { name: 'portfolio', title: 'Мои работы' },
  { name: 'appointment', title: 'Запись на консультацию' }
]

export interface MainCredentials {
  phone: string
  normalizedPhone: string
  email: string
  telegramLink: string
  telegramQr: string
  instagrammLink: string
  instagrammQr: string
  whatsappLink: string
  whatsappQr: string
  addressKMV: string
  mapLinkKMV: string
  addressMoscow: string
  mapLinkMoscow: string
  addressKrasnodar: string
  mapLinkKrasnodar: string
}

export const mainCredentials: MainCredentials = {
  phone: '89199998505',
  get normalizedPhone() {
    return this.phone.replace(/8(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4')
  },
  addressKMV: 'Ставропольский край, Минеральные Воды, Советская улица, 61',
  addressMoscow: 'г.Москва, Кремль',
  addressKrasnodar: 'Краснодар, ул.Пушкина, д.Колотушкина',
  email: 'grantik@mail.ru',
  telegramLink: 'https://t.me/plastic_grant',
  telegramQr: telegramQR,
  instagrammLink: 'https://www.instagram.com/dr.grant_johnovich',
  instagrammQr: instagrammQR,
  whatsappLink: 'https://wa.me/79199998505',
  whatsappQr: '',
  mapLinkKMV:
    'https://yandex.ru/map-widget/v1/?ll=43.126788%2C44.189063&mode=search&oid=167351408524&ol=biz&source=serp_navig&z=15.01',
  mapLinkKrasnodar:
    'https://yandex.ru/map-widget/v1/?ll=43.126788%2C44.189063&mode=search&oid=167351408524&ol=biz&source=serp_navig&z=15.01',
  mapLinkMoscow:
    'https://yandex.ru/map-widget/v1/?ll=43.126788%2C44.189063&mode=search&oid=167351408524&ol=biz&source=serp_navig&z=15.01'
}
