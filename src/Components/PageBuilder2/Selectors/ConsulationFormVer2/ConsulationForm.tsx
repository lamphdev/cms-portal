import { useState } from 'react'
import styled from '@emotion/styled'
import { Button, Col, Form, Image, Input, Row, Select } from 'antd'
import image from '../ConsulationFormVer2/assets/image.png'
import icon1 from '../ConsulationFormVer2/assets/icon1.png'
import icon2 from '../ConsulationFormVer2/assets/icon2.png'
import icon3 from '../ConsulationFormVer2/assets/icon3.png'

type RequiredMark = boolean | 'optional'
interface IProps {
  image?: any
  title?: any
  subTitle?: any
  icon1?: any
  icon2?: any
  icon3?: any
}

const ConsulationFormVer2 = () => {
  const { Option } = Select
  const [form] = Form.useForm()
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional')

  const renderOptionList = () => {
    return option.optionList.map(item => {
      return <Option value={item.key}>{item.value}</Option>
    })
  }

  return (
    <Div>
      <Row>
        <Col span={2}> </Col>
        <Col className='leftSide' span={10}>
          <LeftSide
            image={consulationForm.image}
            title={consulationForm.title}
            subTitle={consulationForm.subTitle}
          />
        </Col>
        <Col className='rightSide' span={4} style={{}}>
          <div className='form'>
            <Form
              name='ConsulationForm'
              autoComplete='off'
              form={form}
              layout='vertical'
              style={{ marginLeft: '30px' }}
            >
              <Form.Item label='Họ và tên *' name='name'>
                <Input />
              </Form.Item>

              <Form.Item label='Email *' name='email'>
                <Input />
              </Form.Item>

              <Form.Item label='Số điện thoại *' name='phone'>
                <Input />
              </Form.Item>

              <Form.Item name='product' label='Sản phẩm quan tâm'>
                <Select
                  style={{
                    width: '90%',
                    height: '50px',
                    border: '1px solid #D0D0D0',
                    borderRadius: '12px 12px 12px 0px'
                  }}
                  bordered={false}
                  allowClear
                >
                  {renderOptionList()}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type='primary'>Gửi yêu cầu</Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col span={2}> </Col>
      </Row>
    </Div>
  )
}

const Div = styled.div`
  background-color: #ef0032;
  //background-color: white;
  padding-top: 2%;
  margin-bottom: 100px;

  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  //text-align: center;
  .leftSide {
    margin-left: 8%;
    .title {
      font-weight: 700;
      font-size: 32px;
      line-height: 26px;
      color: #ffffff;
    }
    .subTitle {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #ffffff;
    }
  }
  .rightSide {
    width: 85%;

    .form {
      width: 200%;
      height: 548px;
      front-weight: 700;
      margin-bottom: -10%;
      background-color: #ffffff;
      padding-top: 50px;
      margin-bottom: -100px;
      padding-left: 5%;
      border-radius: 24px 24px 24px 0px;
      input {
        width: 90%;
        height: 50px;
        border: 1px solid #d0d0d0;
        border-radius: 12px 12px 12px 0px;
      }
      select {
        width: 70%;
        border: 1px solid #d0d0d0;
        border-radius: 12px 12px 12px 0px;
      }
    }
  }
  .ant-btn-primary {
    background: #ef0032;
    border-radius: 12px 12px 12px 0px;
    width: 150px;
    height: 50px;
    border: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    display: flex;
    align-items: center;
    color: #ffffff;
    margin-bottom: -5%;
  }

  .ant-form-item-label > label {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
  }
`
const consulationForm = {
  image: image,
  title: 'Đăng ký nhận tư vấn',
  subTitle:
    'Tư vấn giải pháp dành cho doanh nghiệp bởi đội ngũ chuyên gia hàng đầu',
  icon1: icon1,
  icon2: icon2,
  icon3: icon3
}

const option = {
  optionList: [
    { key: 'option1', value: 'option1' },
    { key: 'option2', value: 'option2' },
    { key: 'option3', value: 'option3' },
    { key: 'option4', value: 'option4' },
    { key: 'option5', value: 'option5' }
  ]
}

function LeftSide (props: any) {
  return (
    <div>
      <Image className='image' src={props.image} preview={false} />
      <p className='title'>{props.title}</p>
      <p className='subTitle'>{props.subTitle}</p>
    </div>
  )
}

export default ConsulationFormVer2
