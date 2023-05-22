import React from 'react'
import styled from '@emotion/styled'
import { Button, Image } from 'antd'

interface IProps {
  src?: string
  title?: string
  contentDisplayDTOList: any

  button: string
  refUrl?: string
}

const OptionOurProductDetail = (props: IProps) => {
  return (
    <Div
      style={{ justifyContent: 'center', height: '100%', maxHeight: '410px' }}
    >
      <div className='image'>
        <Image src={props.src} preview={false} />
      </div>

      <div style={{ marginTop: '30px', height: '55%' }}>
        <Title>{props.title}</Title>
        <Content contentDisplayDTOList={props.contentDisplayDTOList} />
      </div>

      <div className='button'>
        <Button className='button' type='primary'>
          Chi tiết
        </Button>
      </div>
    </Div>
  )
}

const Div = styled.div`
  position: relative;
  padding: 20px;
  .ant-btn-primary {
    justify-content: center;
    height: 40px;
    color: #ffffff;
    position: absolute;
    //top:370px;

    text-align: center;
    background-color: #ef0032;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 0;
    border-radius: 12px 12px 12px 0;
    right: 35%;
  }

  .image {
    text-align: center;
    height: 64px;
    max-width: 200px;
    width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    white-space: nowrap;
    overflow: hidden;
  }

  .button {
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    width: 117px;
    font-size: 14px;
    //padding-top: 20px;
    //margin-bottom: 5px;
    //position: absolute;
    //left: 50%;
    //margin-left: -104.5px;
  }
`
const Title = styled.div`
  margin-bottom: 5px;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  align-items: center;
  color: #ef0032;
  margin-top: 30px;
  white-space: nowrap;
  overflow: hidden;
`

function Content (props: any) {
  return (
    <div
      className='content-our'
      style={{ marginBottom: '20px', marginTop: '20px' }}
    >
      {props.contentDisplayDTOList.map((display: any) => {
        return <p style={{ marginBottom: '0px' }}>{'- ' + display.content}</p>
      })}
    </div>
  )
}

export default OptionOurProductDetail
