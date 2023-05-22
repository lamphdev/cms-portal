/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import { memo } from 'react'
import styled from '@emotion/styled'

interface Props {
  title?: string
  icon: any
  background: any
}
const ChildDisplay = memo((props: Props) => {
  const { title, icon } = props
  return (
    <Div
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
      }}
    >
      <ImageURL>
        <img src={icon} height={70} />
      </ImageURL>
      <Title> {title}</Title>
    </Div>
  )
})
export default ChildDisplay
const Div = styled.div`
  font-family: 'Inter';
  background: #ffffff;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 130px;
`
const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 135%;
  /* or 27px */

  text-align: center;
`
const ImageURL = styled.div`
  color: #ee0033;
`
