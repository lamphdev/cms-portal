import { Col, Image } from 'antd'
import styled from '@emotion/styled'
import iconImage from '../Feedback/assets/contentIcon.png'

interface IProps {
  image?: any
  icon?: any
  content?: any
  title: string
  subtitle: string
}

const FeedbackContentDetail = (props: IProps) => {
  return (
    <Div>
      <Col className='image' span={3}>
        <Image
          src={props.image}
          style={{ height: '60px', width: '60px' }}
          preview={false}
        />
      </Col>
      <Col className='' span={2}>
        <Image src={iconImage} preview={false} />
      </Col>
      <Col className='comment' span={17}>
        <p className='content-feedback'>{props.content}</p>
        <p className='mark'>|</p>
        <p className='name'>{props.title}</p>
        <p className=''>
          <span className='role'>{props.subtitle}</span>
        </p>
      </Col>
    </Div>
  )
}
const Div = styled.div`
  background: #ffffff;
  border-radius: 90px 30px 30px 30px;
  display: flex;

  font-family: 'Inter';
  margin-bottom: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-right: 5%;
  justify-content: center;
  padding-right: -2%;
  p {
    margin: 0;
  }
  .comment {
    margin-left: -3%;
  }

  .content-feedback {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
  }
  .mark {
    color: #d0d0d0;
  }
  .name {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #000000;
  }
  .role {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #ef0032;
  }
  .business {
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    color: #ef0032;
  }
`

export default FeedbackContentDetail
