import React from 'react';
import {Col,Row} from 'antd';
const RouterConfig = require('../../config/config').default.routes;

export default class MyBasitcLayout extends React.Component{
    constructor(){
        super();
        this.state={

        };
        console.log("RouterConfig")
        console.log(RouterConfig)
    }
    render(){
        const {children} = this.props;
        return (<div>
            <Row>
                <Col span={5}>
                
                </Col>
                <Col span={14}>
                    {children}
                </Col>
                <Col span={5}>
                
                </Col>
            </Row>
        </div>)
    }
}