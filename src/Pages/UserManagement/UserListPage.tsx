import React from 'react'
import { Table, UserSearchForm } from '../../Components'
import { TH } from '../../Components/Table'

export function UserListPage () {
  return (
    <>
      <h1>User List page</h1>

      <div className='mt-4'>
        <UserSearchForm onSearch={d => console.log(d)} />
      </div>

      <Table onSort={s => console.log(s)}>
        <thead>
          <tr>
            <TH></TH>
            <TH>STT</TH>
            <TH sortable='name'>Họ tên</TH>
            <TH sortable='taxCode'>Mã số Thuế</TH>
            <TH sortable='phone'>Điện THoại</TH>
            <TH sortable='company'>Tên công ty</TH>
            <TH sortable='city'>Tỉnh/THành phố</TH>
            <TH sortable='createDate'>Ngày tạo</TH>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map(row => (
            <tr key={row}>
              <td></td>
              <td>{row}</td>
              <td>Nguyễn Văn A</td>
              <td>87289748234</td>
              <td>0987787362</td>
              <td>Công ty ABC</td>
              <td>Hà Nội</td>
              <td>25/04/2023 10:00:00</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
