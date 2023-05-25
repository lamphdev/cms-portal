import { Dropdown } from 'antd'
import { useMemo } from 'react'
import { LockOutlined, LogoutOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'

interface Props {
  username: string
}

export function UserActions (props: Props) {
  const options = useMemo(
    () => [
      {
        key: 1,
        icon: <LockOutlined />,
        label: 'Đổi mật khẩu'
      },
      {
        key: 2,
        icon: <LogoutOutlined />,
        label: 'Đăng xuất'
      }
    ],
    []
  )

  return (
    <StyledDropDown
      menu={{ items: options }}
      trigger={['click']}
      placement='bottomRight'>
      <Span>{props.username}</Span>
    </StyledDropDown>
  )
}

const Span = styled('span')(() => ({
  cursor: 'pointer',
  userSelect: 'none',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '120%'
}))

const StyledDropDown = styled(Dropdown)(() => ({
  '.ant-dropdown-menu-item': {
    height: '3608px'
  },
  '.ant-dropdown-menu-item:hover': {
    backgroundColor: 'red',
    color: '#fff'
  }
}))
