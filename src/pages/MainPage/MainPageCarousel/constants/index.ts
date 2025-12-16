import carouselImage1 from '../../../AboutPage/assets/51_resized.jpg'
import defaultLazyImage from '../../../../components/CInformationCard/assets/defaultImage.jpg'
import carouselImage2 from '../assets/carousel-image-1.jpg'
import carouselImage3 from '../assets/carousel-image-2.jpg'
import carouselImage4 from '../assets/carousel-image-3.jpg'
import carouselImage5 from '../assets/carousel-image-4.jpg'
import carouselVideo1 from '../assets/carousel-video-1.mp4'
import carouselVideo2 from '../assets/carousel-video-2.mp4'
import carouselVideo3 from '../assets/carousel-video-3.mp4'
import type { SliderItem } from '@/types'

export interface CarouselItem extends SliderItem {
  key: number
}

const sliderItemsRaw: Array<Omit<CarouselItem, 'key'>> = [
  {
    image: carouselImage1,
    alt: 'Тематическое изображение'
  },
  {
    image: carouselImage2,
    alt: 'Тематическое изображение'
  },
  {
    image: defaultLazyImage,
    video: carouselVideo1,
    alt: 'Тематический видеоролик'
  },
  {
    image: carouselImage4,
    alt: 'Тематическое изображение'
  },
  {
    image: carouselImage5,
    alt: 'Тематическое изображение'
  },
  {
    image: defaultLazyImage,
    video: carouselVideo2,
    alt: 'Тематический видеоролик'
  },
  {
    image: defaultLazyImage,
    video: carouselVideo3,
    alt: 'Тематический видеоролик'
  },
  {
    image: carouselImage3,
    alt: 'Тематическое изображение'
  }
]

export const sliderItems: Array<CarouselItem> = sliderItemsRaw.map((item, index) => {
  return { ...item, key: index }
})
