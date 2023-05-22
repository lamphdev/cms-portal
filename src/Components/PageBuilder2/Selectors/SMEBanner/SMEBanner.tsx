import styled from '@emotion/styled'
import { Button } from 'antd'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}

const SMEBanner = (props: IProps) => {
  const { data } = props

  return (
    <Div>
      <div className='right '>
        <Title title={data.title} subtitle={data.subtitle} />
        <div>
          {data.contentDisplayDTOList?.map(display => {
            return (
              <>
                <Button className='inner' type='primary'>
                  {display.title}
                </Button>
              </>
            )
          })}
        </div>
      </div>
    </Div>
  )
}

const Div = styled.div`
  height: 457px;
  padding-top: 50px;

  .right {
    font-family: 'Inter';
    font-style: normal;
    margin-left: 60%;
    .title {
      font-weight: 700;
      font-size: 32px;
      line-height: 130%;
      color: #ffffff;
      width: 445px;
    }
    .subtitle {
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      color: #ffffff;
      width: 395px;
    }
    .ant-btn-primary {
      background: #f51126;
      border-radius: 12px 12px 12px 0px;
      width: 146px;
      height: 52px;

      border: 1px solid #ffffff;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      margin-top: 5%;
      display: inline-block;
      margin-right: 3%;
    }
    .inner:hover {
      background-color: #ffffff;
      color: #ef0032;
    }
  }
`
function Title (props: any) {
  return (
    <div>
      <p className='title'>{props.title}</p>
      <p className='subtitle'>{props.subtitle}</p>
    </div>
  )
}

export default SMEBanner
