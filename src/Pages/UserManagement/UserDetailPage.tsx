import styled from '@emotion/styled'
import { Paper } from '../../Components/Paper'
import { useNavigate } from 'react-router-dom'

const BackButton = styled('button')(() => ({
  height: '40px',
  border: '1px solid #EF0032',
  padding: '.5rem 2.5rem',
  borderRadius: '5px'
}))

const StyledWraper = styled('div')(({ theme }: any) => ({
  marginTop: '1rem',
  boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.borderRadius,
  '.title': {
    padding: '.75rem',
    color: '#fff',
    backgroundColor: theme.colors.primary,
    borderTopRightRadius: theme.borderRadius,
    borderTopLeftRadius: theme.borderRadius,
    h2: {
      fontWeight: '700',
      fontSize: '12px',
      lineHeight: '15px',
      fontStyle: 'normal'
    }
  },
  '.content': {
    padding: '1rem',
    '.figure': {
      marginTop: '1rem',
      marginBottom: '1rem',
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      img: {
        aspectRatio: 1,
        width: '117px',
        objectFit: 'contain',
        objectPosition: 'center'
      },
      h3: {
        fontWeight: 700,
        fontSize: '25px'
      }
    },
    '.detail': {
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
      div: {
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: '1fr 1fr',
        'label, span': {
          borderBottom: '1px dotted gray'
        }
      }
    }
  }
}))

export function UserDetailPage () {
  const navigate = useNavigate()

  return (
    <>
      <h1>User Chi tiết user</h1>

      <StyledWraper>
        <div className='title'>
          <h2>Chi tiết user</h2>
        </div>
        <div className='content'>
          <div className='figure'>
            <img src='/images/user.svg' alt='' />
            <h3>Nguyễn Văn A</h3>
          </div>

          <div className='detail'>
            <div>
              <label htmlFor=''>Số điện thoại</label>
              <span>09899872652</span>
              <label htmlFor=''>Mã số thuế</label>
              <span>759837953</span>
              <label htmlFor=''>Tỉnh/Thành phố</label>
              <span>Hà Nội</span>
              <label htmlFor=''>Quận/Huyện</label>
              <span>Cầu Giấy</span>
              <label htmlFor=''>Phường/Xã</label>
              <span>Trần Thái Tông</span>
              <label htmlFor=''>Phố/Thôn/Xóm</label>
              <span>Số 85</span>
              <label htmlFor=''>Ngày tạo</label>
              <span>01/02/2023 10:10:00</span>
              <label htmlFor=''>Người tạo</label>
              <span>Trần thị B</span>
            </div>

            <div>
              <label htmlFor=''>Tên công ty</label>
              <span>Công ty ABC</span>
              <label htmlFor=''>Chi cục thuế</label>
              <span>Chi cục thuế Cầu Giấy</span>
              <label htmlFor=''>Người đại diện</label>
              <span>Nguyễn Văn B</span>
              <label htmlFor=''>Ngày thành lập</label>
              <span>02/03/2017</span>
              <label htmlFor=''>Loại hình kinh doanh</label>
              <span>Công ty cổ phần</span>
              <label htmlFor=''>Ngày cập nhật</label>
              <span>01/03/2023 10:10:00</span>
              <label htmlFor=''>Người cập nhật</label>
              <span>Trần Thị B</span>
            </div>
          </div>
        </div>
      </StyledWraper>

      <div className='flex justify-center mt-8'>
        <BackButton onClick={() => navigate(-1)}>Quay lại</BackButton>
      </div>
    </>
  )
}
