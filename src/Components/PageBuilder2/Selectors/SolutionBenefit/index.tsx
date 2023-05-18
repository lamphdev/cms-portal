/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import { Image } from 'antd'
import React, { memo } from 'react'
import styled from '@emotion/styled'
import ChildDisplay from './childDisplay'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}
const SolutionBenefit = memo((props: IProps) => {
  const { data } = props
  return (
    <>
      <Div>
        <Title className='align-self-center'>{data.title}</Title>
        <Content>
          <div>
            {data?.contentDisplayDTOList?.map((display, index) => {
              return <ChildDisplay title={display?.title} index={index} />
            })}
          </div>
          <ImageURL>
            <Image src={data.image} width={700} preview={false}></Image>
          </ImageURL>
        </Content>
      </Div>
    </>
  )
})
export default SolutionBenefit
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 50px 0px;
  gap: 10px;
  background: #ffffff;
`
const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  width: 700px;
`

const ImageURL = styled.div`
  margin-left: 110px;
  margin-top: 80px;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
