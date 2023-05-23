import { Draggable } from 'react-beautiful-dnd'
import { pageBuilderContext } from '.'
import { ReactNode, useContext } from 'react'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { ContentDisplay, componentConfigs } from './config'

interface ComponentViewProps {
  component: ContentDisplay
}

export function ComponentView (props: ComponentViewProps) {
  const { component } = props
  const { components, setComponents, setSelected, setShowEditor } =
    useContext(pageBuilderContext)

  const onSelectView = () => {
    if (component.id) {
      setSelected(component.id)
    }
  }

  const deleteView = () => {
    const newList = components.filter(com => com.id !== component.id)
    setComponents(newList)
  }

  const render = (): ReactNode => {
    const { viewer: Renderer } = componentConfigs[component.type]
    return <Renderer data={component} key={component.id} />
  }

  return (
    <Draggable
      draggableId={component.id || ''}
      index={component.displayOrder || 0}
    >
      {(provided, snapshot) => (
        <StyledDiv
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style }}
          onClick={onSelectView}
        >
          <div className='actions'>
            <button onClick={deleteView}>
              <DeleteOutlined />
            </button>
            <button onClick={() => setShowEditor(true)}>
              <EditOutlined />
            </button>
          </div>
          {render()}
        </StyledDiv>
      )}
    </Draggable>
  )
}

const StyledDiv = styled('div')(() => ({
  '.actions': {
    display: 'none',
    gap: '.5rem'
  },
  ':hover': {
    border: '1px dotted blue',
    position: 'relative',
    '.actions': {
      display: 'flex',
      position: 'absolute',
      top: 0,
      left: 0,
      transform: 'translateY(-100%)',
      backgroundColor: 'red',
      color: 'white',
      padding: '.25rem .5rem',
      borderRadius: '.5rem .5rem 0 0'
    }
  }
}))
