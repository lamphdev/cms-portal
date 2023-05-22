import { LeftCircleFilled } from '@ant-design/icons'
import { memo } from 'react'
import styled from '@emotion/styled'

interface Props {
  title?: string
}
const ChildDisplay = memo((props: Props) => {
  return (
    <>
      <Div>
        <LeftCircleFilled
          style={{ marginTop: '16px', color: '#EC1B2E', marginRight: '17px' }}
        />{' '}
        <Title>
          <div className={'child'}>{props.title}</div>
        </Title>
      </Div>
    </>
  )
})
export default ChildDisplay
const Div = styled.div`
  display: flex;
  border-style: dashed none none none;
  border-width: 2px;
  border-color: rgba(236, 27, 46, 0.4);
`
const Title = styled.div`
  font-family: 'Google Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 30px;
  /* identical to box height, or 158% */
  margin-top: 8px;
  margin-bottom: 9px;
  letter-spacing: -0.02em;
  color: #757575;
  .child:hover {
    color: #ef0032;
  }
`
