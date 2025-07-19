import type { ContactInfo, MainCredentialsInterface, MenuNavButton } from '@/types'
import { mdiEmailOutline, mdiInstagram, mdiWhatsapp } from '@mdi/js'
import telegramIcon from '../layouts/DefaultFooter/assets/telegram_logo.ts'

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

class MainCredetials implements MainCredentialsInterface {
  phone: string
  email: string
  address: string
  vk?: string | undefined
  telegram?: string | undefined
  whatsapp?: string | undefined
  instagramm?: string | undefined
  normalizedPhone: string
  constructor() {
    this.phone = '89179829558'
    this.normalizedPhone = this.phone.replace(/8(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4')
    this.address = 'Ставропольский край, Минеральные Воды, Советская улица, 61'
    this.email = 'grantik@mail.ru'
  }
}

export const mainCredentials: MainCredentialsInterface = new MainCredetials()

export const contacts: Array<ContactInfo> = [
  {
    type: 'email',
    value: mainCredentials.email,
    icon: mdiEmailOutline,
    title: 'Электронная почта'
  },
  {
    type: 'phone',
    value: mainCredentials.phone,
    icon: mdiEmailOutline,
    title: 'Телефон'
  },
  {
    type: 'instagramm',
    value: mainCredentials.instagramm,
    icon: mdiInstagram,
    title: 'Instagramm'
  },
  {
    type: 'telegram',
    value: mainCredentials.telegram,
    icon: telegramIcon,
    title: 'Telegram'
  },
  {
    type: 'whatsapp',
    value: mainCredentials.whatsapp,
    icon: mdiWhatsapp,
    title: "Whats'up"
  }
]
