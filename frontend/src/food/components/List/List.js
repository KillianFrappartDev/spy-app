import React from 'react';

import ListItem from '../ListItem/ListItem';
import './List.css';

function List(props) {

    return (
    <React.Fragment>
        {props.items.map(item => <ListItem key={item.id} id={item.id} color={item.color} date={item.date} rate={item.rate} del={props.del} />)}
    </React.Fragment>
    );

};

export default List;