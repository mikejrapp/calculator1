import React from 'react';

let Backpanel = (props) => {
    return (
        <div className={props.class} id={props.id}>
            {props.children}
        </div>
    )
}

export default Backpanel;