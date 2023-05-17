import styled from '@emotion/styled'

import { Tooltip } from '@mui/material'
import React from 'react';
import {
  Draggable,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot
} from 'react-beautiful-dnd'

const ToolboxDiv = styled.div<{ enabled: boolean; isDraggingOver?: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  position: absolute;
  ${props => (!props.enabled ? `width: 0;` : ';')}
  ${props => (!props.enabled ? `opacity: 0;` : ';')}
`

const Item = styled.div<{ isDragging?: boolean }>`
  width: 95px;
  height: 57px;
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
            isDraggingOver={snapshot.isDraggingOver}
            enabled={true}
            className='toolbox transition bg-white w-full'
          >
            <div style={{
              display: 'flex'
            }} className='transition flex bg-white w-full'>
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
                          <React.Fragment>
                            <div style={{width: '95px', height: '57px'}}>
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
                            </div>
                          </React.Fragment>
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
