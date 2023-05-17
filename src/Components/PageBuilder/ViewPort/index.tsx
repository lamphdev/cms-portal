import React, { useEffect, useState } from 'react'

import { Toolbox } from '../ViewPort/Toolbox'
import styled from '@emotion/styled'
import {
  DragDropContext,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult
} from 'react-beautiful-dnd'
import { Section } from './Section'

export { Section } from './Section'
const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
  text-align: center;
`

const ContainerDiv = styled.div`
  height: 66vh;
  border: 1px solid #000000;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 6px 23px;
  margin-right: 256px;
`

const getListStyle = (isDraggingOver: boolean) => {
  return {
    // background: isDraggingOver ? "lightblue" : "lightgrey",
    background: isDraggingOver ? 'lightblue' : '#ffffff',
    width: '100%',
    minHeight: '58vh',
    border: '1px solid dashed',
    borderRadius: '5px',
    OverflowX: 'scroll'
  }
}

const reorder = (list: any, source: any, destination: any) => {
  console.log('list, source, destination: ', list, source, destination)
  const startIndex = source.index
  const endIndex = destination.index
  console.log('Array.from(list);', list)
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}
/**
 * Moves an item from one list to another list.
 */
const copy = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  console.log('==> dest', destination)
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const item: any = sourceClone[droppableSource.index]
  destClone.splice(droppableDestination.index, 0, {
    ...item,
    id: Math.random() + ''
  })
  console.log('destClone', destClone)
  return destClone
}

const move = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  console.log(
    'move ',
    source,
    destination,
    droppableSource,
    droppableDestination
  )
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result: any = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

export const Viewport: React.FC<{
  children?: React.ReactNode
  onChange: (value: any) => void
}> = ({ children, onChange }) => {
  const [templates, setTemplates] = useState([])
  const [mapComponents, setMapComponent] = useState<any>({
    droppableId: []
  })
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);


  const loadData = async () => {
    let result_page = await fetch('/data/page.json')
    let body = await result_page.json()
    return body
  }
  useEffect(() => {
    ; (async function () {
      const result_components = await loadData()
      setMapComponent({
        droppableId: result_components.components
      })
      setTemplates(result_components.templates)
    })()
  }, [])

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(mapComponents['droppableId'])
    }
  }, [mapComponents])

  useEffect(() => {
    if (!window) {
      return
    }
    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true
        },
        '*'
      )
    })
  }, [])

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    console.log('==> result', result)
    // dropped outside the list
    if (!destination) {
      return
    }
    setActiveIndex(-1);
    switch (source.droppableId) {
      case destination.droppableId: {
        if (destination.droppableId == 'droppableId')
          setMapComponent({
            ...mapComponents,
            [destination.droppableId]: reorder(
              mapComponents[destination.droppableId],
              source,
              destination
            )
          })
        break
      }
      case 'templates': {
        setMapComponent({
          ...mapComponents,
          [destination.droppableId]: copy(
            templates,
            mapComponents[destination.droppableId],
            source,
            destination
          )
        })
        break
      }
      default:
        setMapComponent(
          move(
            mapComponents[source.droppableId],
            mapComponents[destination.droppableId],
            source,
            destination
          )
        )
        break
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ContainerDiv>
        <div className='page-container flex flex-1 h-full flex-col overflow-x-auto pt-6'>
          {children}
          {mapComponents &&
            Object.keys(mapComponents).map(
              (droppableId: any, i: number) => {
                return (
                  <Droppable droppableId={droppableId} key={i}>
                    {(
                      provided: DroppableProvided,
                      snapshot: DroppableStateSnapshot
                    ) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        style={getListStyle(snapshot.isDraggingOver)}
                      >
                        {mapComponents[droppableId].length > 0
                          ? mapComponents[droppableId].map(
                            (component: any, index: number) => {
                              return (
                                <Section
                                  onClick={() => {
                                    setActiveIndex(index);
                                  }}
                                  onMouseOver={() => {
                                    console.log('a')
                                    setHoverIndex(index);
                                  }}
                                  onMouseLeave={() => {
                                    console.log('b')
                                    setHoverIndex(-1);
                                  }}
                                  active={activeIndex === index || hoverIndex === index}
                                  onChange={(value: any) => {
                                    if (
                                      !mapComponents[droppableId][index]
                                    ) {
                                      mapComponents[droppableId][index] =
                                        { details: null }
                                    }
                                    mapComponents[droppableId][
                                      index
                                    ].details = value
                                  }}
                                  key={index}
                                  item={component}
                                  index={index}
                                  onDelete={(index: number) => {
                                    const newListComponent: any[] =
                                      JSON.parse(
                                        JSON.stringify(mapComponents)
                                      )
                                    newListComponent[droppableId].splice(
                                      index,
                                      1
                                    )
                                    setMapComponent(newListComponent)
                                    setActiveIndex(-1);
                                  }}
                                >
                                </Section>
                              )
                            }
                          )
                          : provided.placeholder && (
                            <Notice>THẢ COMPONENT TẠI ĐÂY</Notice>
                          )}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                )
              }
            )}
        </div>
      </ContainerDiv>
      <Toolbox templates={templates}></Toolbox>
    </DragDropContext>
  )
}
