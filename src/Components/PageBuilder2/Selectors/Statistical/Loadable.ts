/**
 *
 * Asynchronously loads the component for CategoryList
 *
 */

import { lazyLoad } from '../../../../utils/loadable'

export const Statistical: any = lazyLoad(
  () => import('./index'),
  module => Statistical
)
