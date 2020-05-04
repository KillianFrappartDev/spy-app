import React from 'react';

import './AddButton.css';

function AddButton(props) {

    return <button className="add-button" onClick={props.onClick}>ADD</button>;

};

export default AddButton;