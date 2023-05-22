/**
 *
 * Asynchronously loads the component for CategoryList
 *
 */

import { lazyLoad } from '../../../../utils/loadable'
import BenefitSlideCarousel from './index'

export const BenefitSlide = lazyLoad(
  () => import('./index'),
  module => BenefitSlideCarousel
)
