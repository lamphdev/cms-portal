import { SlideImage } from './Selectors/SlideImage'
import { SlideImageEditor } from './Editors'
import { ViettelCA } from './Selectors/ViettelCA'
import ViettelCAFeature from './Selectors/ViettelCAFeature/ViettelCAFeature'

export enum ContentDisplayType {
  SLIDE_IMAGE = 'SLIDE_IMAGE',
  VIETTEL_CA = 'VIETTEL_CA',
  VIETTEL_CA_FEATURE = 'VIETTEL_CA_FEATURE',
  CHOOSE_VIETTEL_CA = 'CHOOSE_VIETTEL_CA',
  CHOOSE_VIETTEL = 'CHOOSE_VIETTEL',
  BUSINESS_TYPE = 'BUSINESS_TYPE',
  SME_BANNER = 'SME_BANNER',
  STATISTICAL = 'STATISTICAL',
  NEWS = 'NEWS',
  BENEFIT_SLIDE = 'BENEFIT_SLIDE',
  FEEDBACK = 'FEEDBACK',
  OUR_PRODUCT = 'OUR_PRODUCT',
  CONSULATION = 'CONSULATION',
  CONSULATION_V2 = 'CONSULATION_V2',
  SME_BANNER_PLATFORM = 'SME_BANNER_PLATFORM',
  SME_BANNER_SLIDE = 'SME_BANNER_SLIDE',
  NEWS_V2 = 'NEWS_V2',
  SOLUTION_BENEFIT = 'SOLUTION_BENEFIT',
  BENEFITS = 'BENEFITS',
  BENEFIT_SINVOICE = 'BENEFIT_SINVOICE',
  PARTNER_LIST = 'PARTNER_LIST',
  SINVOICE_GUIDE = 'SINVOICE_GUIDE',
  NEWS_VER3 = 'NEWS_VER3',
  SINVOICE_FORM = 'SINVOICE_FORM',
  PRICE_LIST = 'PRICE_LIST',
  RATE_ABOUT_VIETTEL_CA = 'RATE_ABOUT_VIETTEL_CA',
  PACKAGE_PRICE = 'PACKAGE_PRICE'
}

export interface ContentDisplay {
  id?: string
  pageId?: string
  type: ContentDisplayType
  content?: string
  telecomServiceId?: string
  title?: string
  subtitle?: string
  icon?: string
  image?: string
  backgroundImage?: string
  displayOrder?: number
  refUrl?: string
  parentId?: string
  status?: number
  createBy?: string
  createAt?: Date
  updateBy?: string
  updateAt?: Date
  contentDisplayDTOList?: ContentDisplay[]
}
export type ComponentConfig = {
  [key: string]: {
    viewer: React.ComponentType<any>
    editor?: React.ComponentType<any>
    defaultProps?: Partial<ContentDisplay>
  }
}

export const componentConfigs: ComponentConfig = {
  [ContentDisplayType.SLIDE_IMAGE]: {
    viewer: SlideImage,
    editor: SlideImageEditor,
    defaultProps: {
      backgroundImage: '/images/user.svg'
    }
  },
  [ContentDisplayType.VIETTEL_CA]: {
    viewer: ViettelCA,
    editor: SlideImageEditor,
    defaultProps: {
      title: 'Default title',
      content: 'Default content',
      image: 'https://youtu.be/BHwzDmr6d7s'
    }
  },
  [ContentDisplayType.VIETTEL_CA_FEATURE]: {
    viewer: ViettelCAFeature,
    editor: SlideImageEditor,
    defaultProps: {
      backgroundImage: '/images/user.svg',
      title: 'Default title',
      contentDisplayDTOList: [
        {
          title: 'Default title 1',
          content: 'Default content',
          image: '/images/user.svg',
          type: ContentDisplayType.VIETTEL_CA_FEATURE
        },
        {
          title: 'Default title 2',
          content: 'Default content 2',
          image: '/images/user.svg',
          type: ContentDisplayType.VIETTEL_CA_FEATURE
        }
      ]
    }
  }
}

// switch (component.type) {
//   case ContentDisplayType.SLIDE_IMAGE:
//     return <SlideImage data={component} key={component.id} />
//   case ContentDisplayType.VIETTEL_CA:
//     return <ViettelCA data={component} key={component.id} />
//   case ContentDisplayType.VIETTEL_CA_FEATURE:
//     return <ViettelCAFeature data={component} key={component.id} />
//   case ContentDisplayType.CHOOSE_VIETTEL_CA:
//     return <ChooseViettelCA data={component} key={component.id} />
//   case ContentDisplayType.BUSINESS_TYPE:
//     return <BusinessType data={component} key={component.id} />
//   // case ContentDisplayType.SME_BANNER:
//   //   return <SMEBanner data={data} key={data.id} />;
//   case ContentDisplayType.STATISTICAL:
//     return <Statistical data={component} key={component.id} />
//   case ContentDisplayType.CHOOSE_VIETTEL:
//     return <ChooseViettel data={component} key={component.id} />
//   case ContentDisplayType.NEWS:
//     return <News data={component} key={component.id} />
//   case ContentDisplayType.BENEFIT_SLIDE:
//     return <BenefitSlide data={component} key={component.id} />
//   case ContentDisplayType.FEEDBACK:
//     return <Feedback data={component} key={component.id} />
//   case ContentDisplayType.OUR_PRODUCT:
//     return <OurProduct data={component} key={component.id} />
//   case ContentDisplayType.CONSULATION:
//     return <Consulation key={component.id} />
//   case ContentDisplayType.CONSULATION_V2:
//     return <ConsulationFormVer2 key={component.id} />
//   case ContentDisplayType.SME_BANNER_SLIDE:
//     return <SMEBannerCarousel data={component} key={component.id} />
//   case ContentDisplayType.NEWS_V2:
//     return <NewsVer2 data={component} key={component.id} />
//   case ContentDisplayType.SOLUTION_BENEFIT:
//     return <SolutionBenefit data={component} />
//   case ContentDisplayType.BENEFITS:
//     return <Benefits data={component} key={component.id} />
//   case ContentDisplayType.BENEFIT_SINVOICE:
//     return <BenefitSInvoice data={component} />
// case ContentDisplayType.PARTNER_LIST:
//     return <Partner data={data} key={data.id}/>;
// case ContentDisplayType.SINVOICE_GUIDE:
//     return <SInvoiceGuide data={data} key={data.id}/>;
// case ContentDisplayType.NEWS_VER3:
//     return <NewsVer3 data={data} key={data.id}/>;
// case ContentDisplayType.PRICE_LIST:
//     return <PriceList key={data.id}/>;
// case ContentDisplayType.SINVOICE_FORM:
//     return <SInvoiceForm key={data.id}/>;
// case ContentDisplayType.RATE_ABOUT_VIETTEL_CA:
//     return <RateAboutCiettelCA data={data}/>;
// case ContentDisplayType.PACKAGE_PRICE:
//     const values: any = search.split('=');
//     const alias = values.length >= 2
//         ? values[1]
//         : 'CA';
//     return <ServicePriceList key={data.id} telecomServiceAlias={alias}/>;
// default:
//   return <></>
// }
