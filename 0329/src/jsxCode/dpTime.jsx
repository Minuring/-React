import React from "react";

function dpTime() {
    var now = new Date();
    var ampm = null;
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (hours > 12) {
        hours -= 12;
        ampm = "오후 ";
    } else {
        ampm = "오전 ";
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return (
        <h2>접속한 시간 : {ampm} {hours} : {minutes} : {seconds}</h2>
    )
}

export default dpTime;