import React from "react";

function Info(props) {
    return (
        <p>
            {props.name} : {props.content}
        </p>
    )
}
export default Info;