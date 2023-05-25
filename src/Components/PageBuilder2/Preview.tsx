import styled from '@emotion/styled'
import { Droppable } from 'react-beautiful-dnd'
import { pageBuilderContext } from '.'
import { ComponentView } from './ComponentView'
import { useContext } from 'react'
import { ContentDisplay } from './config'

const StyledDropable = styled('div')<{ dragOver: boolean }>(({ dragOver }) => ({
  minHeight: '200px',
  minWidth: '600px',
  maxWidth: '100%',
  width: '100%',
  border: dragOver ? '1px dotted gray' : '',
  backgroundColor: 'lightcyan'
}))

interface PreviewProps {
  className?: string
  components?: ContentDisplay[]
}

export function Preview (props: PreviewProps) {
  const { components } = useContext(pageBuilderContext)

  return (
    <Droppable droppableId='preview'>
      {(provided, snapshot) => (
        <StyledDropable
          {...provided.droppableProps}
          className={props.className}
          ref={provided.innerRef}
          dragOver={snapshot.isDraggingOver}
        >
          {components.map(component => (
            <ComponentView key={component.id} component={component} />
          ))}
          {provided.placeholder}
        </StyledDropable>
      )}
    </Droppable>
  )
}
