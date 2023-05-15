import { SliderImage } from '../Selectors/silder'
import styled from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import {
  Draggable,
  DraggableProvided,
  DraggableRubric,
  DraggableStateSnapshot
} from 'react-beautiful-dnd'
import Move from '../../../../public/icons/move.svg'
import TrashCanOutline from '../../../../public/icons/trash-can-outline.svg'

export type SectionProps = {
  index: number
}

export type SectionStyleProps = {
  width?: ''
  isDragging?: boolean
}
const SectionStyle = styled.div<SectionStyleProps>`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${props => (props.isDragging ? 'dashed #4099ff' : 'solid #ddd')};
  height: 'auto';
  ${props => (props.width ? `width: ${props.width}px;` : 'min-width: 200px;')}
`

const getRandom = () => {
  return 'item-' + Math.random()
}
const Handle = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  user-select: none;
  padding: 0.5rem;
  line-height: 1.5;
  border-radius: 3px 0 0 3px;
  background: #fff;
  color: #000;
  width: 100px;
`

export const Section = (props: any) => {
  const { item, index, name, children, onDelete } = props
  const id = (item?.id ? item.id : getRandom()) + ''
  const sectionRef = useRef(null)
  useEffect(() => {
    if (sectionRef && sectionRef.current != null) {
      const element = sectionRef.current as HTMLElement
      element.style.display = 'block'
    }
  }, [sectionRef])
  const onChange = (value: any, type: string) => {
    if (typeof props.onChange === 'function') {
      props.onChange(value)
    }
  }
  return (
    <Draggable draggableId={id} key={id} index={index}>
      {(
        provided: DraggableProvided,
        snapshot: DraggableStateSnapshot,
        rubric: DraggableRubric
      ) => (
        <>
          <SectionStyle
            ref={provided.innerRef}
            {...provided.draggableProps}
            isDragging={snapshot.isDragging}
          >
            <Handle>
              <img
                {...provided.dragHandleProps}
                src='/icons/move.svg'
                width={24}
                height={24}
                alt={''}
              />
              <img
                onClick={() =>
                  typeof onDelete === 'function' ? onDelete(index) : null
                }
                src='/icons/trash-can-outline.svg'
                width={24}
                height={24}
                alt={''}
              />
            </Handle>
            {item ? (
              <SliderImage onChange={value => onChange(value, 'SliderImage')} />
            ) : null}
            {/* {children} */}
          </SectionStyle>
        </>
      )}
    </Draggable>
  )
}
