import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./drag.css"; 

const initialData = {
    todo: [
        { id: "1", content: "Make Coffee"},
        { id: "2", content: "Write a journal"},
        { id: "3", content: "Finish Coding Project"},
        { id: "4", content: "Go Shopping"},
        { id: "5", content: "Play basketball"},
        { id: "6", content: "Do Painting"},
    ],

    done: [
        { id: "7", content: "Workout"},
    ], 
};

  function board() {
    const [task, setTask] = useState(initialData);

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) return;

       const sourceList = [...task[source.droppableId]];
       const [movedItem] = sourceList.splice(source.index, 1);
       const destList = [...task[destination.droppableId]];
       destList.splice(destination.index, 0, movedItem)

       setTask({
        ...tasks,
        [source.droppableId]: sourceList
       })


    }
  }



    