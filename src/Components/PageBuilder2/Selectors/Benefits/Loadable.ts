/**
 *
 * Asynchronously loads the component for CategoryList
 *
 */

import { lazyLoad } from '../../../../utils/loadable'

export const Benefits: any = lazyLoad(
  () => import('../Benefits/index'),
  module => Benefits
)
