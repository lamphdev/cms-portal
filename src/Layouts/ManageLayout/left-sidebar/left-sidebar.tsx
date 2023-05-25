import { useState } from 'react'
import {
  ComponentSvg,
  GlobalSvg,
  NewSvg,
  ImageSvg,
  FilterSvg,
  UserSvg,
  ServiceSvg
} from './svg.component'
import { Link, useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

interface ItemProps {
  name: string
  link: string
  onClick?: (props: any) => void
  isActive: boolean
  icon: React.FunctionComponent<any> // can using ComponentType or using ReactNode example <GlobalSvg isActive={true} />
}

const StyledSidebar = styled('section')(() => ({
  width: '250px',
  height: '100%',
  flexShrink: 0,

  background: '#FFFFFF',
  boxShadow: '2px 0px 10px rgba(0, 0, 0, 0.1)',
  '.sidebar-header': {
    fontWeight: '700',
    fontSize: '16px',
    paddingLeft: '0.25rem',
    paddingTop: '1.25rem',
    userSelect: 'none'
  },
  ul: {
    listStyleType: 'none',
    padding: 0
  }
}))

const StyledLi = styled('li')<{ isActive: boolean }>(({ isActive }) => ({
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '1rem',
  gap: '1rem',
  backgroundColor: isActive ? 'rgba(239, 0, 50, 0.2)' : 'transparent',
  a: {
    userSelect: 'none',
    textDecoration: 'none',
    color: '#212529'
  }
}))

export const Item = (props: ItemProps) => {
  const Children = props.icon
  return (
    <StyledLi isActive={props.isActive} onClick={() => props.onClick?.(props)}>
      <div>{<Children isActive={props.isActive} />}</div>
      <div>
        <Link to={props.link} className=''>
          {props.name}
        </Link>
      </div>
    </StyledLi>
  )
}

export default function LeftSidebar () {
  const [position, setPosition] = useState(0)
  const navigate = useNavigate();
  const items = [
    {
      link: '/manage/pages',
      name: 'Trang web',
      icon: GlobalSvg
    },
    {
      link: '/manage/component-management',
      name: 'Component',
      icon: ComponentSvg
    },
    {
      link: '/manage/service-list',
      name: 'Dịch vụ',
      icon: ServiceSvg
    },
    {
      link: 'news-management',
      name: 'Tin tức',
      icon: NewSvg
    },
    {
      link: 'image-management',
      name: 'Ảnh',
      icon: ImageSvg
    },
    {
      link: 'filter-management',
      name: 'Filter',
      icon: FilterSvg
    },
    {
      link: 'user-management',
      name: 'User',
      icon: UserSvg
    }
  ]
  const onSelected = (index: number) => {
    setPosition(index)
  }
  return (
    <StyledSidebar>
      <div className='sidebar-header'>
        <span>Cấu hình</span>
      </div>
      <div className='left-sidebar-menu-body'>
        <ul className='left-sidebar-menu-body-list'>
          {items.map((item: any, index: number) => (
            <Item
              onClick={(props: any) => {
                onSelected(index)
                if (props?.link) {
                  navigate(props?.link)
                }
              }}
              key={index}
              name={item.name}
              isActive={window.location.pathname.indexOf(item.link) >= 0}
              link={item?.link}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </StyledSidebar>
  )
}
