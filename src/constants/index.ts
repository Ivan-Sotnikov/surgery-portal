import type { ContactInfo, MenuNavButton } from '@/types'
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
      { name: 'plastic/mammo', title: 'Пластика груди' }
    ]
  },
  { name: 'portfolio', title: 'Мои работы' },
  { name: 'preparation', title: 'Подготовка к операции' },
  { name: 'contacts', title: 'Контакты' }
]

export const contacts: Array<ContactInfo> = [
  {
    type: 'email',
    value: 'www.mail.ru',
    icon: mdiEmailOutline,
    title: 'Электронная почта'
  },
  {
    type: 'phone',
    value: 'www.mail.ru',
    icon: mdiEmailOutline,
    title: 'Телефон'
  },
  {
    type: 'instagramm',
    value: 'www.mail.ru',
    icon: mdiInstagram,
    title: 'Instagramm'
  },
  {
    type: 'telegram',
    value: 'www.mail.ru',
    icon: telegramIcon,
    title: 'Telegram'
  },
  {
    type: 'whatsapp',
    value: 'www.mail.ru',
    icon: mdiWhatsapp,
    title: "Whats'up"
  }
]
