import React from "react";
import { cartlist } from "./util";
import type { CartItem } from "./Types";

const EventPatterns: React.FC = () => {

  const handleClick = (item: CartItem): void => {
    alert(`You clicked ${item.name}`);
  };

  const handleBye = ()=>
  {
    alert("Bye");
  }
  return (
    <div>
      <h2>Event Handling Patterns</h2>

      {cartlist.map((item) =>
      
      (
        <div key={item.id}>

          {/* 1. Inline */}
          <button onClick={() => alert(item.name)}>
            Inline Click
          </button>

          {/* 2. Function with param */}
          <button onClick={() => handleClick(item)}>
            Function Call
          </button>

          {/* 3. Bind */}
          <button onClick={handleBye}>
            Bind Example
          </button>


       {/* <button onClick={handleClick}/>Test</button> */}

        </div>
      ))}

         
    </div>
    
  );



};

export default EventPatterns;