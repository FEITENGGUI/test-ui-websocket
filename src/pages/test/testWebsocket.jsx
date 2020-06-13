import React from 'react';
import { Button, Row, Col } from 'antd';

let ws;

export default class TestWebsocket extends React.Component {
    state = {
        message: [][2],
        disabled: false,
    }
    // componentDidMount() {
    //     console.log("wwwwwwwwwwwwwwwwwwwwwwwww")
    //     ws = new WebSocket("ws://127.0.0.1:8080");

    //     ws.onopen = (evt) => {
    //         console.log("Connection open ...");
    //         // ws.send({ "name": "myname" });
    //     }
    //     ws.onmessage=(evt)=>{
    //         console.log( "Received Message: " + evt.data);
    //     }
    //     ws.onclose=(evt)=>{
    //         console.log("Connection closed.");
    //     }
    //     ws.onerror=(evt)=>{
    //         console.log("Connection error");
    //     }
    // }

    onClickHandle = () => {
        let defaultMessage = ["right", "defaultMessage"];
        let temp = this.state.message;
        if (temp) {
            temp[temp.length] = defaultMessage
        } else {
            temp = [defaultMessage];
        }
       

        
        console.log("wwwwwwwwwwwwwwwwwwwwwwwww")
        console.log('WebSocket' in window);
        ws = new WebSocket("ws://127.0.0.1:8080/websocket");

        ws.onopen = (evt) => {
            console.log("Connection open ...");
            this.setState({
                message: temp,
                disabled: true,
            })
            // ws.send({ "name": "myname" });
        }
        ws.onmessage=(evt)=>{
            console.log( "Received Message: " + evt.data);
        }
        ws.onclose=(evt)=>{
            console.log("Connection closed.");
        }
        ws.onerror=(evt)=>{
            console.log("Connection error");
        }



    }

    onSendHandle=()=>{
        // ws.send({"name":"myname"})
        ws.send("name-myname")
    }



    render() {
        const left = "left";
        const right = "right";
        const color = "red";
        return (<div>
            <Button
                onClick={this.onClickHandle}
                disabled={this.state.disabled}
            >开始</Button>
            <Button
                onClick={this.onSendHandle}
                disabled={!this.state.disabled}
            >发送</Button>
            {
                this.state.message && this.state.message.map((item) => {
                    return (<Row >
                        <span style={{ float: item[0], fontSize: "20px" }}>{item[1]}</span>
                    </Row>);
                })
            }
        </div>)
    }
}