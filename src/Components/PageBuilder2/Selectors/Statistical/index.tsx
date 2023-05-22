/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import { Col } from 'antd'
import { memo } from 'react'
import styled from '@emotion/styled'
import ChildDisplay from './childDisplay'
import { ContentDisplay } from '../../config'

interface Props {
  data: ContentDisplay
}
const Statistical = memo((props: Props) => {
  const { data } = props
  return (
    <>
      <Div>
        <div
          className='statistical'
          style={{
            backgroundImage: `url(${props.data.backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '3%'
            }}
          >
            <Title className='align-self-center'>{data.title}</Title>
          </div>
          <Col span={20}>
            <Content>
              {data?.contentDisplayDTOList?.map(display => {
                return (
                  <Margin>
                    {' '}
                    <ChildDisplay display={display}></ChildDisplay>
                  </Margin>
                )
              })}
            </Content>
          </Col>
        </div>
      </Div>
    </>
  )
})
export default Statistical
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 16px;
  margin-top: -90px;
  margin-bottom: -90px;

  .statistical {
    display: flex;
    background: yellow;
    width: 1450px;
    border-radius: 18px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`
const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 135%;
  /* or 43px */
  margin-left: 3%;

  display: flex;
  align-items: center;
`

const Margin = styled.div`
  width: 100%;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 60px;
  white-space: nowrap;
`
