import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            now: new Date(),
            ampm: null,
            hours: null,
            minutes: null,
            seconds: null
        };

        this.blockStyle = {
            display : "inline-block",
            backgroundColor : props.color.blockBG,
            padding : "0 2% 0 2%",
            borderRadius : "20px 20px 20px 20px"
        };
        this.h2Font = { fontSize: "small" };
    }

    componentDidMount() {
        this.tick();
        this.clockInterval = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.clockInterval);
    }

    tick() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let ampm = hours >= 12 ? "오후" : "오전";
        hours = hours > 12 ? hours - 12 : hours;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.setState({
            now: now,
            ampm: ampm,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    }

    render() {
        return (
            <div style={this.blockStyle}>
                <h2 style={this.h2Font}>현재 시간 : {this.state.ampm} {this.state.hours} : {this.state.minutes} : {this.state.seconds}</h2>
            </div>
        );
    }
}

export default Timer;
