import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Draggable } from 'react-beautiful-dnd'

export function ToolItem (props: {
  children: ReactNode
  index: number
  type: string
}) {
  const { type, children } = props

  return (
    <Draggable draggableId={type} index={props.index}>
      {(provided, snapshot) => (
        <>
          <Item
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{ ...provided.draggableProps.style }}
          >
            {children}
          </Item>
          {snapshot.isDragging ? <Clone>{props.children}</Clone> : null}
        </>
      )}
    </Draggable>
  )
}

const Item = styled('div')(() => ({
  display: 'flex',
  height: '40px',
  paddingLeft: '1rem',
  alignItems: 'center',
  backgroundColor: 'lightcoral',
  border: '1px solid white',
  position: 'relative',
  div: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  }
}))

const Clone = styled(Item)(() => ({
  '+div': {
    // display: 'none !important'
  }
}))
