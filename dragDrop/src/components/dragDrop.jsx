import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DragAndDrop = () => {
  const [items, setItems] = useState([
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
  ]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If there is no destination
    if (!destination) {
      return;
    }

    // if item is dropped in the same place where from it picked up
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // create a new array to reorder the items
    const newItems = Array.from(items);

    // remove the value from previous list

    newItems.splice(source.index, 1);

    // add the new value in the list
    newItems.splice(destination.index, 0, items[source.index]);

    // update the list
    setItems(newItems);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ padding: "20px", backgroundColor: "#f0f0f0" }}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{
                      userSelect: "none",
                      padding: "16px",
                      margin: "0 0 8px 0",
                      backgroundColor: "#ffffff",
                      borderRadius: "4px",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                      ...provided.draggableProps.style,
                    }}
                        >
                            {item.content}
                  </div>
                )}
              </Draggable>
            ))}
                      {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDrop;
