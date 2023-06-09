import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Preview } from './Preview'
import { useEffect, useState } from 'react'
import { ToolBar } from './ToolBar'

import { v4 as uuidV4 } from 'uuid'
import React from 'react'
import styled from '@emotion/styled'
import { ContentDisplay, componentConfigs } from './config'

interface PageBuilderState {
  components: ContentDisplay[]
  setComponents: (list: ContentDisplay[]) => void
  selected?: string | null
  setSelected: (id: string) => void
  getSelectedComponent: () => ContentDisplay | null
  updateProps: (id: string, data: Partial<ContentDisplay>) => void
}
export const pageBuilderContext = React.createContext<PageBuilderState>({
  components: [],
  setComponents: list => {},
  selected: null,
  setSelected: id => {},
  getSelectedComponent: () => null,
  updateProps: (id, data) => {}
})

interface Props {
  onChange?: (data: ContentDisplay[]) => void
}

/**
 * Page builder component
 * @returns
 */
export function PageBuilder2 (props: Props) {
  const { onChange } = props
  const [components, setComponents] = useState<ContentDisplay[]>([])
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (onChange) {
      onChange(components)
    }
  }, [onChange, components])

  /**
   * on drag end handler
   * @param result DropResult
   * @returns
   */
  const onDragEnd = async (result: DropResult) => {
    const isCreate = result.source.droppableId === 'toolbar'
    if (isCreate) {
      const indexToInsert = result.destination?.index
      if (indexToInsert === null || indexToInsert === undefined) {
        return
      }

      const config = componentConfigs[result.draggableId]
      const newInstance = {
        id: uuidV4(),
        displayOrder: indexToInsert,
        type: result.draggableId,
        ...config?.defaultProps
      } as any
      const cloneComponents = [...components]
      cloneComponents.splice(indexToInsert, 0, newInstance)
      const ordered = cloneComponents.map((el, idx) => ({
        ...el,
        displayOrder: idx
      }))
      setComponents(ordered)
    } else {
      const clone = [...components]
      const [removed] = clone.splice(result.source.index, 1)
      if (
        result.destination?.index !== null &&
        result.destination?.index !== undefined
      ) {
        clone.splice(result.destination?.index, 0, removed)
      }
      const ordered = clone.map((el, index) => ({
        ...el,
        displayOrder: index
      }))
      setComponents(ordered)
    }
  }

  /**
   * get selected component
   * @returns selected component
   */
  const getSelectedComponent = () => {
    if (!selected) {
      return null
    }
    return components.find(el => el.id === selected) || null
  }

  const updateProps = (id: string, data: Partial<ContentDisplay>) => {
    const component = components.find(element => element.id === id)
    if (component) {
      const newInstance = { ...component, ...data }
      const newComponents = components.map(element =>
        element.id === id ? newInstance : element
      )
      setComponents(newComponents)
    }
  }

  return (
    <pageBuilderContext.Provider
      value={{
        components,
        setComponents,
        selected,
        setSelected,
        updateProps,
        getSelectedComponent
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex>
          <Left>
            <Preview components={components} />
          </Left>
          <Right>
            <StyledToolbar></StyledToolbar>
          </Right>
        </Flex>
      </DragDropContext>
    </pageBuilderContext.Provider>
  )
}

const Flex = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap-reverse'
}))

const Left = styled('div')(() => ({
  flexGrow: 1
}))

const Right = styled('div')(() => ({
  width: '400px'
}))
const StyledToolbar = styled(ToolBar)(() => ({
  minWidth: '250px'
}))
