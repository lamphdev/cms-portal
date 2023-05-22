/**
 *
 * Benefit
 * createdBy: DucNV
 * company:
 */
import React, { memo } from 'react'
import styled from '@emotion/styled'
import ChildComponent from './ChilComponent'
import { ContentDisplay } from '../../config'

interface IProps {
  data: ContentDisplay
}
const Benefits = memo((props: IProps) => {
  const { data } = props
  return (
    <>
      <div style={{}}>
        <Div>
          <Title className='align-self-center'>{data.title}</Title>
          <Subtitle className='align-self-center'>{data.subtitle}</Subtitle>
          <div className='align-self-center content-benefit'>
            {(data.contentDisplayDTOList || []).map((display, index) => {
              return (
                <div className='column'>
                  <ChildComponent
                    icon={display.icon}
                    title={display.title}
                    refUrl={display.refUrl}
                    contents={(display.contentDisplayDTOList || []).map(
                      data => data.content || ''
                    )}
                  ></ChildComponent>
                </div>
              )
            })}
            ''
          </div>
        </Div>
      </div>
    </>
  )
})
export default Benefits
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 118px;

  background: #ffffff;
  gap: 10px;
  .content-benefit {
    display: flex;
    margin-top: 50px;
    .column {
      box-sizing: border-box;
      width: 270px;
      margin-right: 30px;
      border-radius: 10px;

      /* Inside auto layout */

      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }
`
const Title = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 52px;
  /* identical to box height, or 144% */

  text-align: center;
  letter-spacing: -0.4px;

  /* Black */

  color: #222222;
`

const Wrapper = styled.div`
  height: 100%;
`
const Subtitle = styled.div`
  font-family: 'Google Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;

  /* Grey */

  color: #757575;

  mix-blend-mode: normal;
`
