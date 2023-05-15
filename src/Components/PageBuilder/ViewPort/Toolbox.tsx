import styled from '@emotion/styled'

import { Tooltip } from '@mui/material'
import {
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot
} from 'react-beautiful-dnd'

const ToolboxDiv = styled.div<{ enabled: boolean; isDraggingOver?: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  display: flex;
  ${props => (!props.enabled ? `width: 0;` : '')}
  ${props => (!props.enabled ? `opacity: 0;` : '')}
`

const Item = styled.div<{ isDragging?: boolean }>`
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
`
const Clone = styled(Item)`
  + div {
    display: none !important;
  }
`
type ToolboxProps = {
  templates: any[]
}
export const Toolbox = (props: ToolboxProps) => {
  return (
    <Droppable droppableId='templates' isDropDisabled={true}>
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
        return (
          <ToolboxDiv
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            enabled={true}
            className='toolbox transition h-full flex flex-row bg-white w-full'
          >
            <div style={{ display: 'flex', flexDirection: 'row' }} className='flex flex-3 flex-row gap-3 items-center pt-3 w-full'>
              {props.templates &&
                props.templates.map((template: any, templateIndex: number) => {
                  const draggableId = template.id + ''
                  return (
                    <Draggable
                      draggableId={draggableId}
                      key={draggableId}
                      index={templateIndex}
                    >
                      {(provided, snapshot) => {
                        return (
                          <>
                            <Item
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={provided.draggableProps.style}
                              isDragging={snapshot.isDragging}
                              className='m-2 pb-2 cursor-pointer block'
                            >
                              {template.name}
                            </Item>
                            {snapshot.isDragging && (
                              <Clone isDragging={snapshot.isDragging}>
                                {template.name}
                              </Clone>
                            )}
                          </>
                        )
                      }}
                    </Draggable>
                  )
                })}
            </div>
          </ToolboxDiv>
        )
      }}
    </Droppable>
  )
}
