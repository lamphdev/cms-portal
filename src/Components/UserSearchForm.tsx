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
  backgroundColor: '#EF0032',
  padding: '.5rem 1rem',
  color: '#fff',
  borderRadius: theme.borderRadius
}))

const Grid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1rem'
}))

interface Props {
  onSearch?: (data: any) => void
  onExport?: (data: any) => void
}

export function UserSearchForm (props: Props) {
  const { control, getValues, handleSubmit } = useForm()
  const { onSearch, onExport } = props

  const onSubmit = (data: any) => {
    if (onSearch) {
      onSearch(data)
    }
  }

  const onExportClick = () => {
    if (onExport) {
      onExport(getValues())
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
                <Label htmlFor=''>Họ tên</Label>
                <Input placeholder='Nhập họ tên user' {...field} />
              </div>
            )}
          />

          <Controller
            control={control}
            name='area'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Tỉnh/Thành phố</Label>
                <Select
                  {...field}
                  className='w-full'
                  placeholder='Chọn Tỉnh/Thành phố'
                  options={[{ label: 'Label', value: 'label1' }]}
                />
              </div>
            )}
          />

          <Controller
            control={control}
            name='taxCode'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Mã số thuế</Label>
                <Input placeholder='Nhập mã số thuế' {...field} />
              </div>
            )}
          />

          <Controller
            control={control}
            name='phone'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Số điện thoại</Label>
                <Input placeholder='Nhập số điện thoại' {...field} />
              </div>
            )}
          />

          <Controller
            control={control}
            name='company'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Tên công ty</Label>
                <Input placeholder='Nhập tên công ty' {...field} />
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
        <Button type='button' onClick={onExportClick}>
          <FileExcelOutlined />
          Xuất Excel
        </Button>
      </div>
    </form>
  )
}
