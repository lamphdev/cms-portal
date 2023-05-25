import { Controller, useForm } from 'react-hook-form'
import { Paper } from './Paper'
import { DatePicker, Input, Select } from 'antd'
import { SearchOutlined, FileExcelOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Button } from './Button'
import dayjs from 'dayjs'

const formatMoment = (input: any) => {
  if (input) {
    return input.format('DD/MM/YYYY')
  }
  return null
}

const parseMoment = (str: string | null | undefined): any => {
  if (str) {
    return dayjs(str, 'DD/MM/YYYY')
  }
  return null
}

const Label = styled('label')(() => ({
  fontWeight: 600,
  fontSize: '14px',
  //   fontFamily: 'Open Sans',
  lineHeight: '1.5rem',
  fontStyle: 'normal'
}))

const StyledButton = styled(Button)(({ theme }: any) => ({
  span: {
    marginRight: '.5rem'
  }
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
                <DatePicker
                  format={'DD/MM/YYYY'}
                  {...field}
                  value={parseMoment(field.value)}
                  onChange={val => {
                    field.onChange(formatMoment(val))
                  }}
                  style={{ width: '100%' }}
                />
              </div>
            )}
          />
          <Controller
            control={control}
            name='toDate'
            render={({ field }) => (
              <div>
                <Label htmlFor=''>Ngày tạo: Đến ngày</Label>
                <DatePicker
                  format={'DD/MM/YYYY'}
                  value={parseMoment(field.value)}
                  onChange={val => field.onChange(formatMoment(val))}
                  style={{ width: '100%' }}
                />
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
        <StyledButton type='submit'>
          <SearchOutlined />
          Tìm kiếm
        </StyledButton>
        <StyledButton type='button' onClick={onExportClick}>
          <FileExcelOutlined />
          Xuất Excel
        </StyledButton>
      </div>
    </form>
  )
}
