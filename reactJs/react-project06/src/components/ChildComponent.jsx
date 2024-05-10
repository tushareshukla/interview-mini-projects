import React from "react";

export default function ChildComponent({ item, onItemClick }) {
  console.log(`Child Component ${item} rendering`);
  return (
    <li
      onClick={() => {
        onItemClick(item);
      }}
    >
      {item}
    </li>
  );
}
