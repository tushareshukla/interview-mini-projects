import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const handleItemClick = useCallback((item) => {
        console.log(`Clicked on ${item}`);
      }, []);
  return (
    <div>
     <h2> Items</h2>
      <ul>
        {items.map((item ,index) =>(
            <li key={index}> <ChildComponent key={items.index} item ={item}  onItemClick={handleItemClick}/></li>
        ))}
      </ul>
    </div>
  );
}
