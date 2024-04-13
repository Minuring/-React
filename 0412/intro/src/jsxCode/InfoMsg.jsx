import React from "react";

function InfoMsg(props) {
    const style = { 
        fontSize : "1.2em" 
    };
    return (
        <p style={style}>
            {props.name} : {props.content}
        </p>
    )
}
export default InfoMsg;