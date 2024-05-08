import React, { Component } from 'react';
import InfoImg from './InfoImg';
import Info from './InfoMsg';


class InfoBlock extends Component {
    constructor() {
        super()

        this.imgBlockStyle = {
            height: "100%",
            display: "inline-block",
            marginLeft: "00%",
            marginRight: "5%",
            width: "30%"
        };
        this.infoBlockStyle = {
            height: "100%",
            display: "inline-block",
            width: "50%",
        };
    }

    render() {
        return (
            <div>
                <div style={this.imgBlockStyle}>
                    <InfoImg src="me.jpeg" />
                </div>
                <div style={this.infoBlockStyle}>
                    <Info name="이름" content="이민우"></Info>
                    <Info name="학과" content="소프트웨어학과"></Info>
                    <Info name="학번" content="2020875038"></Info>
                    <Info name="나이" content="24세"></Info>
                    <Info name="생일" content="2001년 11월 22일"></Info>
                    <Info name="취미" content="운동, PC게임"></Info>
                </div>
            </div>
        );
    }
}

export default InfoBlock;