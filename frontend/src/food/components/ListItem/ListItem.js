import React, { useState } from "react";

import "./ListItem.css";

function ListItem(props) {
  const [text, setText] = useState(false)

  function textOn() {
      setText(true);
  }

  function textOff() {
      setText(false);
  }

  return (
    <div className={`list-item ${props.color}`} onMouseEnter={textOn} onMouseOut={textOff}>
      
      {text ? <h1 className="list-item__delete" onMouseEnter={textOn} onMouseOut={textOff}>DELETE</h1> : <div><h2 className="list-item__date">{props.date}</h2>
      <h2 className="list-item__rate">{props.rate}</h2></div>}
      
    </div>
  );
}

export default ListItem;
