import React, { useState } from "react";

function DragButton () {
    const [drag, setDrag] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDragStart = (e) => {
        setDrag(true);
        e.dataTransfer.setData("text/plain", "");
    };

    const handleDragOver = (e) => {
        if (dragged) {
            const { clientX, clientY } = e;
            setPosition({ x: clientX - 50, y: clientY - 50 });
}
