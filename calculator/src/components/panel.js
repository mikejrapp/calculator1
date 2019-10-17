import React from 'react';

let Panel = (props) => {
    return (
        <div className={props.class} id={props.id}>
            {props.children}
        </div>
    )
}

export default Panel;