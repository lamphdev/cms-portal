import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default function PageBuilder2 () {
  const onDragEnd = (result: any) => {
    console.log(result)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='pageView'>
        {(provided, snapshot) => (
            <div></div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
