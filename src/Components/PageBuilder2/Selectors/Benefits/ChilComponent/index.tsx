/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import { ArrowRightOutlined, CheckOutlined } from '@ant-design/icons'
import { Col, Image, Row } from 'antd'
import { memo } from 'react'
import styled from '@emotion/styled'

interface Props {
  icon?: string
  title?: string
  contents?: string[]
  refUrl?: string
}
const ChildComponent = memo((props: Props) => {
  const { icon, title, contents } = props
  return (
    <>
      <Div className=''>
        <div className='align-self-center'>
          <Image src={icon} width={90} height={90}></Image>
        </div>
        <Title>{title}</Title>
        {(contents || []).map(content => {
          return (
            <Row>
              <Col span={2}>
                <CheckOutlined />
              </Col>
              <Col span={22}>
                <Content>{content}</Content>
              </Col>
            </Row>
          )
        })}

        <div className='click'>
          <ArrowRightOutlined
            style={{
              backgroundColor: 'red',
              borderRadius: '15px',
              width: '28px',
              height: '28px',
              paddingTop: '6px',
              color: '#EC1B2E',
              background: 'rgba(236, 27, 46, 0.12)',
              marginLeft: '85%'
            }}
          />
        </div>
      </Div>
    </>
  )
})
export default ChildComponent
const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 38px 16px 50px;
  position: relative;
  background: #ffffff;
  background: linear-gradient(
    180.03deg,
    #ffffff 0.02%,
    rgba(255, 255, 255, 0) 100.03%
  );
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  .click {
    margin-top: 50px;
    position: absolute;
    bottom: 3%;
    right: 17%;
    cursor: pointer;
  }
`
const Title = styled.div`
  font-family: 'Google Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #222222;
  margin-top: 40px;
`
const Content = styled.div`
  font-family: 'Google Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  color: #757575;
  mix-blend-mode: normal;
`
