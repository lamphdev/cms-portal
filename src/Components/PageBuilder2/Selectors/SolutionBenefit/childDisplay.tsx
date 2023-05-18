/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import { LeftCircleFilled } from '@ant-design/icons'
import { memo } from 'react'
import styled from '@emotion/styled'

interface Props {
  title?: string
  index: number
}
const ChildDisplay = memo((props: Props) => {
  return (
    <Div>
      <Icon>
        {' '}
        <LeftCircleFilled />
      </Icon>
      <Title style={{ color: props.index === 0 ? '#ee0033' : '#000000' }}>
        {' '}
        {props.title}
      </Title>
    </Div>
  )
})
export default ChildDisplay
const Div = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 10px;
  width: 488px;
`
const Title = styled.div`
  font-family: 'Alatsi';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
`
const Icon = styled.div`
  color: #ee0033;
`
