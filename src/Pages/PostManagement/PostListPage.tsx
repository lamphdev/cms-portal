import { TH, Table } from '../../Components'
import { PostSearchForm } from '../../Components/PostSearchForm'
import { EditOutlined } from '@ant-design/icons'

export function PostListPage () {
  return (
    <div>
      <h1>Tin tức</h1>

      <PostSearchForm></PostSearchForm>

      <Table>
        <thead>
          <tr>
            <TH>STT</TH>
            <TH sortable='name'>Tên tin tức</TH>
            <TH sortable='link'>Đường link</TH>
            <TH sortable='updateBy'>Người cập nhật</TH>
            <TH sortable='updateDate'>Ngày cập nhật</TH>
            <TH sortable='status'>Trạng thái</TH>
            <TH>Thao tác</TH>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map(row => (
            <tr className='text-center'>
              <td>{row}</td>
              <td>Fake data</td>
              <td>Fake data</td>
              <td>Fake data</td>
              <td>Fake data</td>
              <td>Fake data</td>
              <td>
                <div>
                  <button
                    style={{
                      border: '0',
                      backgroundColor: 'transparent',
                      cursor: 'pointer'
                    }}
                  >
                    <EditOutlined />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
