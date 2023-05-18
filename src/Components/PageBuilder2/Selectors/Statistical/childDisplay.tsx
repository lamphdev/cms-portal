/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import { memo } from 'react'
import styled from '@emotion/styled'
import { ContentDisplay } from '../../config'

interface Props {
  display: ContentDisplay
}
const ChildDisplay = memo((props: Props) => {
  const { title, icon, subtitle } = props.display
  console.log(props.display)

  return (
    <Div>
      <ImageURL>
        <img
          src={icon}
          alt=''
          style={{ maxHeight: '80px', maxWidth: '80px' }}
        />
      </ImageURL>
      <Title> {title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Div>
  )
})
export default ChildDisplay
const Div = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.div`
  font-family: 'Alatsi';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: #ee0033;
`
const ImageURL = styled.div`
  color: #ee0033;
  height: 64px;
`
const Subtitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  /* Neutral/100 */

  color: #555555;
`
