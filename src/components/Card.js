import React from "react";

function Card(props) {
    return (
        <div className="card" id={props.name} onClick={props.onClick}>
            {props.name}
        </div>
    );
}

export default Card;