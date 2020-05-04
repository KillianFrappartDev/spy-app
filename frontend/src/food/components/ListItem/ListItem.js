import React from 'react';

import './ListItem.css';

function ListItem(props) {

    return (
    <div className={`list-item ${props.color}`}>
        <h2 className="list-item__date">{props.date}</h2>
        <h2 className="list-item__rate">{props.rate}</h2>
    </div>
    );

};

export default ListItem;