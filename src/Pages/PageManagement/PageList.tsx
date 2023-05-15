import { DatePicker, Input, Select } from 'antd'
import { Link } from 'react-router-dom'

const titleDefault = 'Trang web'
const items: any[] = [
  {
    name: 'Tất cả',
    value: 0
  },
  {
    name: 'active',
    value: 1
  },
  {
    name: 'deactive',
    value: 2
  }
]

export function PageList () {
  const onChangeSelect = (value: any) => {
    console.log(value)
  }
  return (
    <div>
      <div className='page-managent'>
        <div className='page-managent-header'>
          <h5 className='page-managent-title'>{titleDefault}</h5>
        </div>
        <div className='page-managent-body'>
          <div className='page-manager-block-search flex-1'>
            <div className='flex items-center justify-between flex-wrap sm:mx-auto sm:justify-items-center sm:justify-center md:justify-between sm:gap-3'>
              <div className='page-manager-block-search-col'>
                <DatePicker placeholder='Ngày cập nhật: Từ ngày' />
              </div>
              <div className='page-manager-block-search-col'>
                <DatePicker placeholder='Ngày cập nhật: Đến ngày' />
              </div>
              <div className='page-manager-block-search-col'>
                <Input
                  title='Tiêu đề website'
                  className=' hover:text-red-500'
                  placeholder='Nhập tiêu đề website'
                />
              </div>
              <div className='page-manager-block-search-col'>
                <Select
                  className='w-full'
                  title='Trạng thái'
                  options={items}
                  onChange={onChangeSelect}
                />
              </div>
            </div>
          </div>
          <div className='page-managent-block-table mt-5'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-base'>STT</th>
                  <th>Tiêu đề website</th>
                  <th>Ngày cập nhật</th>
                  <th>Người cập nhật</th>
                  <th>Trạng thái</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='items-cente text-center'>STT</td>
                  <td className='items-center text-center'>
                    http://Tiêu đề website
                  </td>
                  <td className='items-center text-center'>30/04/2023</td>
                  <td className='items-center text-center'>Người cập nhật</td>
                  <td className='items-center text-center'>Trạng thái</td>
                  <td className='items-center text-center'>
                    <Link
                      className='hover:text-red-500 text-blue-500'
                      to='/page-management/1'
                    >
                      Chi tiết
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='page-managent-block-pagination'></div>
        </div>
        <div className='page-managent-footer'></div>
      </div>
    </div>
  )
}
