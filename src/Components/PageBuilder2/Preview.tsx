import styled from '@emotion/styled'
import { Droppable } from 'react-beautiful-dnd'

const StyledDropable = styled('div')(() => ({
  minHeight: '200px',
  
}))

export function Preview () {
  return (
    <Droppable droppableId='pageView'>
      {(provided, snapshot) => <div ref={provided.innerRef}></div>}
    </Droppable>
  )
}
