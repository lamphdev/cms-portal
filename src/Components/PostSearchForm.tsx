import { Controller, useForm } from 'react-hook-form'
import { Paper } from './Paper'
import { Input, Select } from 'antd'
import { SearchOutlined, FileExcelOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

const Label = styled('label')(() => ({
  fontWeight: 600,
  fontSize: '14px',
  //   fontFamily: 'Open Sans',
  lineHeight: '19px',
  fontStyle: 'normal'
}))

const Button = styled('button')(({ theme }: any) => ({
  border: 0,
  backgroundColor: '#EF0032',
  padding: '.5rem 1rem',
  color: '#fff',
  borderRadius: theme.borderRadius,
  cursor: 'pointer',
  span: {
    marginRight: '.5rem'
  }
}))

const Grid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1rem'
}))

interface Props {
  onSearch?: (data: any) => void
  onCreate?: () => void
}

export function PostSearchForm (props: Props) {
  const { control, handleSubmit } = useForm()
  const { onSearch, onCreate } = props

  const onSubmit = (data: any) => {
    if (onSearch) {
      onSearch(data)
    }
  }

  const onCreateClick = () => {
    if (onCreate) {
      onCreate()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper>
        <Grid>
          <Controller
            control={control}
            name='fromDate'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Ngày tạo: Từ ngày</Label>
                <Input {...field} />
              </div>
            )}
          />
          <Controller
            control={control}
            name='toDate'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Ngày tạo: Đến ngày</Label>
                <Input {...field} />
              </div>
            )}
          />

          <Controller
            control={control}
            name='name'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Tên tin tức</Label>
                <Input placeholder='Nhập tên tin tức' {...field} />
              </div>
            )}
          />

          <Controller
            control={control}
            name='area'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Trạng thái</Label>
                <Select
                  {...field}
                  className='w-full'
                  placeholder='Chọn trạng thái'
                  options={[{ label: 'Label', value: 'label1' }]}
                />
              </div>
            )}
          />
        </Grid>
      </Paper>

      <div className='flex justify-end py-8 gap-4'>
        <Button type='submit'>
          <SearchOutlined />
          Tìm kiếm
        </Button>
        <Button type='button' onClick={onCreateClick}>
          <FileExcelOutlined />
          Tạo mới
        </Button>
      </div>
    </form>
  )
}
