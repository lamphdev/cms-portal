import React from 'react'
import styled from '@emotion/styled'
import ViettelCAFeatureList from './ViettelCAFeatureList'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}

const ViettelCAFeature = (props: IProps) => {
  const { data } = props
  //const [data, setData] = useState<any>([1,2,3])
  console.log(data)
  return (
    <Div
      style={{
        backgroundImage: `url(${data.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
    >
      <Title className='align-self-center'>{data.title}</Title>
      <div>
        <ViettelCAFeatureList dataList={data?.contentDisplayDTOList || []} />
      </div>
    </Div>
  )
}
const Title = styled.div`
  width: 522px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 135%;
  text-align: center;
  margin-bottom: 70px;
`
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 100px;
  height: 100%;
  padding-bottom: 100px;
  .viettelCAFeatureDetail {
    //text-align: left;
    //align-items: center;
  }
`

export default ViettelCAFeature
