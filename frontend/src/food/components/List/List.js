import React from 'react';

import ListItem from '../ListItem/ListItem';
import './List.css';

function List(props) {

    return (
    <React.Fragment>
        {props.items.map(item => <ListItem key={item.id} color={item.color} date={item.date} rate={item.rate} />)}
    </React.Fragment>
    );

};

export default List;