import React, { useState } from "react";

import List from "../components/List/List";
import AddButton from "../components/AddButton/AddButton";

function Food() {
  const [DUMMY_ITEMS, setList] = useState([
    {
      id: "i1",
      color: "green",
      date: "1st May 2020",
      rate: "5",
    },
    {
      id: "i2",
      color: "orange",
      date: "2nd May 2020",
      rate: "3",
    },
    {
      id: "i3",
      color: "red",
      date: "3rd May 2020",
      rate: "1",
    },
  ]);

  function addItem() {
    setList((prevValue) => {
      return [
        ...prevValue,
        { id: "i4", color: "green", date: "1st May 2020", rate: "5" },
      ];
    });
  }

  return (
    <React.Fragment>
      <List items={DUMMY_ITEMS} />
      <AddButton onClick={addItem} />
    </React.Fragment>
  );
}

export default Food;
