import React, { useState } from "react";

import "./Average.css";

function Average(props) {
  let color = "";

  switch (true) {
    case props.average < 50:
      color = "red";
      break;
    case props.average >= 50 && props.average < 75:
      color = "yellow";
      break;
    case props.average >= 75:
      color = "green";
      break;
    default:
      break;
  }

  return (
    <div className={`average ${color}`}>
      <h1>{`${props.average}%`}</h1>
    </div>
  );
}

export default Average;
