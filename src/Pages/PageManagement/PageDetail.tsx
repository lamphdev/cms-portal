import { Box } from '@mui/material'
import { Form } from 'antd'
import { Viewport } from '../../Components/PageBuilder/ViewPort'

export function PageDetail () {
  const [form] = Form.useForm()
  return (
    <Box>
      <Box className='p-3'>
        <Form form={form}>
          <Box className='page-header'>
            <Box className='flex gap-4'>
              <Form.Item label='Tiêu đề website' name='username'>
                <input
                  type='text'
                  className='w-full rounded'
                  onChange={event => {
                    console.log(form.getFieldsValue())
                  }}
                />
              </Form.Item>
            </Box>
          </Box>
          <Form.Item name='components'>
            <Viewport onChange={value => console.log(value)} />
          </Form.Item>
        </Form>
      </Box>
    </Box>
  )
}
