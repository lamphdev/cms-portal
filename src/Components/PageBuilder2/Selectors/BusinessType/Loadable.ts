/**
 *
 * Asynchronously loads the component for CategoryList
 *
 */

import { lazyLoad } from '../../../../utils/loadable'

export const SolutionBenefit: any = lazyLoad(
  () => import('./index'),
  module => SolutionBenefit
)
