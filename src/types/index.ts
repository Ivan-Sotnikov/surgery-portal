export interface NavButton {
  name: string
  title: string
}

export interface MenuNavButton extends NavButton {
  isMenu?: boolean
  navButtonsList?: Array<NavButton>
}

export interface SliderItem {
  image: string
  video?: string
  alt?: string
}
