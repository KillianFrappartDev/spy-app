import React, { useState } from "react";

import List from "../components/List/List";
import AddButton from "../components/AddButton/AddButton";
import AddModal from "../components/AddModal/AddModal";

function Food() {
  const [DUMMY_ITEMS, setList] = useState([
    {
      id: 0,
      color: "green",
      date: "01 / 05 / 2020",
      rate: "5",
    },
    {
      id: 1,
      color: "orange",
      date: "02 / 05 / 2020",
      rate: "3",
    },
    {
      id: 2,
      color: "red",
      date: "03 / 05 / 2020",
      rate: "1",
    },
  ]);

  function addItem(item) {
    item.id = DUMMY_ITEMS.length;
    setList((prevValue) => {
      return [...prevValue, item];
    });
    closeShowAdd();
  }

  function deleteItem(e) {
    const itemID = e.target.id;
    const result = DUMMY_ITEMS.filter(item => item.id != itemID);
    setList(result);
    
  }

  const [showAdd, setShowAdd] = useState(false);

  const openShowAdd = () => setShowAdd(true);

  const closeShowAdd = () => setShowAdd(false);

  return (
    <React.Fragment>
      <AddModal show={showAdd} onCancel={closeShowAdd} onNewItem={addItem} />
      <List items={DUMMY_ITEMS} del={deleteItem} />
      <AddButton onClick={openShowAdd} />
    </React.Fragment>
  );
}

export default Food;
