import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { ToolItem } from './ToolItem'
import { componentConfigs } from './config'

interface ToolBarProps {
  children?: ReactNode
  className?: string
}

export function ToolBar (props: ToolBarProps) {
  return (
    <Droppable droppableId='toolbar' isDropDisabled={true}>
      {(provided, snapshot) => (
        <>
          <Grid
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={props.className}
          >
            {Object.keys(componentConfigs).map((type, index) => (
              <ToolItem key={type} index={index} type={type}>
                {type}
              </ToolItem>
            ))}
          </Grid>
          {/* {provided.placeholder} */}
        </>
      )}
    </Droppable>
  )
}

const Grid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(70px, 1fr))'
}))
