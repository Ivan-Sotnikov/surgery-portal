export interface NavButton {
  name: string
  title: string
}

export interface MenuNavButton extends NavButton {
  isMenu?: boolean
  navButtonsList?: Array<NavButton>
}

export interface ContactInfo {
  type: 'phone' | 'email' | 'instagramm' | 'telegram' | 'whatsapp' | 'vk'
  icon?: string
  title: string
  value?: string
  qrImage?: string
}

export interface MainCredentialsInterface {
  phone: string
  normalizedPhone?: string
  email?: string
  telegram?: string
  instagramm?: string
  whatsapp?: string
  vk?: string
  address: string
}
