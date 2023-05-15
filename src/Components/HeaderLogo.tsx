import styled from '@emotion/styled'

interface HeaderLogoProps {
  className?: string
}

const LogoWrapper = styled('div')(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem',
  '.header-title': {
    display: 'flex',
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    height: '30px',
    width: '54px',
    borderRadius: '15px 15px 15px 0px',
    padding: '4px 6px 4px 6px',
    span: {
      fontSize: '18',
      margin: 'auto',
      color: '#ffffff',
      fontWeight: '700',
      left: '4px'
    }
  }
}))

export function HeaderLogo (props: HeaderLogoProps) {
  return (
    <LogoWrapper className={props.className}>
      <img
        className='img-logo'
        src={'/images/Viettel_logo.svg'}
        width={131}
        height={28}
        alt={''}
      />
      <div className='header-title'>
        <span className='header-title-inner'>CMS</span>
      </div>
    </LogoWrapper>
  )
}
