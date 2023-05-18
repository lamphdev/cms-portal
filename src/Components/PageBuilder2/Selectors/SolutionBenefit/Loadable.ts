/**
 *
 * Asynchronously loads the component for CategoryList
 *
 */

import { lazyLoad } from '../../../../utils/loadable'

export const SolutionBenefitLayzy: any = lazyLoad(
  () => import('./index'),
  module => SolutionBenefitLayzy
)
