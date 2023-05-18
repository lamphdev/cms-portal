import styled from '@emotion/styled'
import DescriptionChooseViettel from '../DescriptionChooseViettel/DescriptionChooseViettel'
import { Image } from 'antd'
import ChooseViettelTitle from './ChooseViettelTitle/ChooseViettelTitle'
import ChooseViettelVideo from './ChooseViettelVideo/ChooseViettelVideo'
import { ContentDisplay } from '../../config'

interface Props {
  data: ContentDisplay
}
const ChooseViettel = (props: Props) => {
  const { data } = props
  return (
    <Div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          background: '#ffffff',
          paddingBottom: '100px'
        }}
      >
        <div className='left'>
          <div className='mark-title'>
            <Image src={data.icon} preview={false} />
          </div>
          <div className='content-title' style={{ paddingBottom: '20px' }}>
            <ChooseViettelTitle title={data.title}></ChooseViettelTitle>
          </div>
          <div>
            {(data.contentDisplayDTOList || []).map(display => {
              return (
                <DescriptionChooseViettel
                  display={display}
                ></DescriptionChooseViettel>
              )
            })}
          </div>
        </div>

        <div className='right' style={{ marginLeft: '10%' }}>
          <ChooseViettelVideo url={data.image}></ChooseViettelVideo>
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`
  background: #f5f5f5;
  .left {
    .mark-title {
      color: #ef0032;
      align-items: flex-start;
      flex-direction: row;
      padding-top: 100px;
      font-weight: 500;
    }
  }
  .right {
    margin-top: 50px;

    .row {
      .react-player {
        top: 0;
        left: 0;
        border-radius: 16px;
        overflow: hidden;
      }
    }
  }
`
export default ChooseViettel
