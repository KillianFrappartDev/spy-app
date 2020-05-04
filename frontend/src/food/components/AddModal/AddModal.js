import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Backdrop from "../Backdrop/Backdrop";
import "./AddModal.css";

function ModalOverlay(props) {
  const [newDate, setNewDate] = useState("");

  function getDate(e) {
    const currentDate = e.target.value;
    setNewDate(currentDate);
  }

  function handleChange(e) {
    console.log(e.target.checked);
  }

  const domElements = [
    document.getElementById("breakfast"),
    document.getElementById("lunch"),
    document.getElementById("snack"),
    document.getElementById("dinner"),
    document.getElementById("desert"),
  ];
  var newItem = { id: "i5", date: newDate, rate: 0, color: "" };

  function createItem(e) {
    e.preventDefault();
    domElements.map((element) => {
      if (element.checked) {
        newItem.rate++;
      }
    });
    switch (true) {
      case newItem.rate < 3 :
        newItem.color = "red";
        break;
      case newItem.rate === 3:
        newItem.color = "orange";
        break;
      case newItem.rate > 3:
        newItem.color = "green";
        break;
      default:
        break;
    }
    props.onNewItem(newItem);
  }

  const content = (
    <div className='modal'>
      <form onSubmit={createItem}>
        <label htmlFor='date'>Date</label>
        <input id='date' type='date' onChange={getDate} />
        <br />
        <label htmlFor='breakfast'>Breakfast</label>
        <input
          id='breakfast'
          name='breakfast'
          type='checkbox'
          onChange={handleChange}
        />
        <br />
        <label htmlFor='lunch'>Lunch</label>
        <input
          id='lunch'
          name='Lunch'
          type='checkbox'
          onChange={handleChange}
        />
        <br />
        <label htmlFor='snack'>Snacks</label>
        <input
          id='snack'
          name='Snacks'
          type='checkbox'
          onChange={handleChange}
        />
        <br />
        <label htmlFor='dinner'>Dinner</label>
        <input
          id='dinner'
          name='Dinner'
          type='checkbox'
          onChange={handleChange}
        />
        <br />
        <label htmlFor='desert'>Desert</label>
        <input
          id='desert'
          name='Desert'
          type='checkbox'
          onChange={handleChange}
        />
        <br />
        <input type='submit' />
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

function AddModal(props) {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={600}
        classNames='modal'>
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
}

export default AddModal;
