import styled from '@emotion/styled';
import { Form } from 'antd'
import { SliderImage } from '../../Components/PageBuilder/Selectors/silder';
import { Viewport } from '../../Components/PageBuilder/ViewPort'

const PageDetailStyled = styled.div`
`;

export function PageDetail () {
  const [form] = Form.useForm()
  return (
    <PageDetailStyled>
        <Form form={form}>
          <div className='page-header'>
            <div className='flex gap-4'>
              <Form.Item label='Tiêu đề website' name='username'>
                <input
                  type='text'
                  className='w-full rounded'
                  onChange={event => {
                    console.log(form.getFieldsValue())
                  }}
                />
              </Form.Item>
            </div>
          </div>
          <Form.Item name='components'>
            <Viewport onChange={value => console.log(value)}>
            </Viewport>
          </Form.Item>
        </Form>
    </PageDetailStyled>
  )
}
