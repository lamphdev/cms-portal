/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import { memo } from 'react'
import styled from '@emotion/styled'
import ChildDisplay from './childDisplay'
import { ContentDisplay } from '../../config'

interface Props {
  data: ContentDisplay
}
const BusinessType = memo((props: Props) => {
  return (
    <>
      <Div
        style={{
          backgroundImage: `url(${props.data.backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }}
      >
        <Title>{props.data.title}</Title>
        <Content>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            {(props.data.contentDisplayDTOList || []).map(display => {
              return (
                <ChildDisplay
                  title={display.title}
                  icon={display.icon}
                  background={display.backgroundImage}
                ></ChildDisplay>
              )
            })}
          </div>
        </Content>
      </Div>
    </>
  )
})
export default BusinessType
const Div = styled.div`
  padding: 95px 0px;
  gap: 10px;
  background: #f5f5f5;
  padding-left: 55px;
  font-family: 'Inter';
  display: grid;
  grid-template-columns: 24% auto;
`
const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 135%;
  display: flex;
  align-items: center;
  min-width: 100px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
