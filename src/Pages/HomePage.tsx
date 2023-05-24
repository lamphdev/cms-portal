import { Modal } from 'antd'
import { ChangePassword, PageBuilder2 } from '../Components'
import styled from '@emotion/styled'

export function HomePage () {
  return (
    <div>
      <h1>Home page</h1>
      <PageBuilder2 onChange={e => console.log(e)} />

      <StyledModal title='Đổi mật khẩu  ' open={true} footer={false} width={'700px'}>
        <ChangePassword />
      </StyledModal>
    </div>
  )
}

const StyledModal = styled(Modal)(() => ({
  '.ant-modal-content': {
    padding: 0
  },
  '.ant-modal-close': {
    color: '#fff'
  },
  '.ant-modal-header': {
    height: '51px',
    display: 'flex',
    paddingLeft: '1.5rem',
    alignItems: 'center',
    background: '#EF0032',
    '.ant-modal-title': {
      color: '#fff'
    }
  },
  '.ant-modal-body': {
    padding: '50px'
  }
}))
