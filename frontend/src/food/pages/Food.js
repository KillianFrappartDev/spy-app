import React, { useState } from "react";

import List from "../components/List/List";
import AddButton from "../components/AddButton/AddButton";
import AddModal from "../components/AddModal/AddModal";

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

  function addItem(item) {
     setList((prevValue) => {
       return [
         ...prevValue,
         item,
       ];
     });
    closeShowAdd();
  }

  const [showAdd, setShowAdd] = useState(false);

  const openShowAdd = () => setShowAdd(true);

  const closeShowAdd = () => setShowAdd(false);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(e);
  // }

  return (
    <React.Fragment>
      <AddModal
        show={showAdd}
        // onSubmit={handleSubmit}
        onCancel={closeShowAdd}
        onNewItem={addItem}
      />
      <List items={DUMMY_ITEMS} />
      <AddButton onClick={openShowAdd} />
    </React.Fragment>
  );
}

export default Food;
