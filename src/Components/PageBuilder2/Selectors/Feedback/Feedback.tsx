import styled from '@emotion/styled'
import FeedbackList from './FeedbackList'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}

const Feedback = (props: IProps) => {
  const { data } = props
  return (
    <Div>
      <FeedbackList
        icon={data.icon}
        title={data.title}
        subTitle={data.subtitle}
        image={data.image}
        contentDisplayList={data.contentDisplayDTOList || []}
      />
    </Div>
  )
}

const Div = styled.div`
  width: 100%;
  background: #ffffff;
  padding-bottom: 20px;
  padding-top: 100px;
`

export default Feedback
