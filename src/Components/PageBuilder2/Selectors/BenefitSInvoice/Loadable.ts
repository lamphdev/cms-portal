/**
 *
 * Asynchronously loads the component for CategoryList
 *
 */

import { lazyLoad } from '../../../../utils/loadable'
import BenefitSInvoice from '.'

export const Benefits = lazyLoad(
  () => import('./index'),
  module => BenefitSInvoice
)
