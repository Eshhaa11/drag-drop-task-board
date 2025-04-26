import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./drag.css"; 

const initialData = {
    todo: [
        { id: "1", content: "Make Coffee"},
        { id: "2", content: "Write a journal"},
        { id: "1", content: "Finish Coding Project"}

    ]

}



    