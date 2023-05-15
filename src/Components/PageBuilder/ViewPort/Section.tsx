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
  isDragging?: boolean,
  active?: boolean
}
const SectionStyle = styled.div<SectionStyleProps>(({ isDragging, width, active }) => ({
  display: 'flex',
  userSelect: 'none',
  position: 'relative',
  padding: '0.5rem',
  margin: '0 0 0.5rem 0',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  lineHeight: '1.5',
  borderRadius: '3px',
  background: '#fff',
  border: isDragging ? 'dashed #4099ff' : 'solid #ddd',
  height: 'auto',
  width: width ? `${width}px` : 'min-width: 200px',
  '.component': {
    border: active ? `0.5px solid #EF0032` : 'unset'
  },
  'div[data-rbd-droppable-id] > div' : {
    display: 'block',
    border: 'none'
  }
}))

const getRandom = () => {
  return 'item-' + Math.random()
}
const Handle = styled.div<{ active: boolean }>(({active}) => ({
  alignItems: 'center',
  alignContent: 'center',
  usercelect: 'none',
  padding: '0.5rem',
  lineHeight: '1.5',
  background: 'transparent',
  color: '#000',
  width: '100px',
  position: 'absolute',
  top: '-26px',
  left: '4px',
  zIndex: 1,
  display: active !== true ? 'none' : 'flex',
  // border: active === true ? '0.5px solid #EF0032' : 'unset'
}))

export const Section = (props: any) => {
  const { item, index, name, children, onDelete, onClick, onMouseOver, onMouseLeave, active } = props
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
            active={active}
            ref={provided.innerRef}
            {...provided.draggableProps}
            isDragging={snapshot.isDragging}
            onClick={() => onClick()}
            onMouseOver={() => onMouseOver()}
            onMouseLeave={() => onMouseLeave()}
          >
            <Handle active={active}>
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
            <div className='component'>
              {item ? (
                <SliderImage onChange={value => onChange(value, 'SliderImage')} />
              ) : null}
            </div>
            {/* {children} */}
          </SectionStyle>
        </>
      )}
    </Draggable>
  )
}
