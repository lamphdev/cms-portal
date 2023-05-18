import styled from '@emotion/styled'
import FeedbackContent from './FeedbackContent'

interface IProps {
  contentDisplayDTOList: any
}

const FeedbackDetail = (props: IProps) => {
  return (
    <Div>
      <div className='below'>
        <div>
          <FeedbackContent
            contentDisplayDTOList={props.contentDisplayDTOList}
          />
        </div>
      </div>
    </Div>
  )
}
const Div = styled.div`
  background: #ffffff;
  font-family: 'Inter', serif;
  font-style: normal;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default FeedbackDetail
