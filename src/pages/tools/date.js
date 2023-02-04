import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import moment from 'moment';
import { Col, Input, Row, Alert, Typography, Button, Space  } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text, Link  } = Typography;
export default class ReactJsonView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date(),
            aUnixTimestamp: moment(new Date()).format('X'),
            aDate: '',

            bDate: moment().format('YYYY-MM-DD HH:mm:ss'),
            bUnixTimeStamp: ''
        }
        this.unixToDate = this.unixToDate.bind(this);
        this.dateToUnix = this.dateToUnix.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
 
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
 
    tick() {
        this.setState({
            date: new Date()
        });
    }

    unixToDate() {
        console.log(moment(this.state.aUnixTimestamp).format('YYYY-MM-DD HH:mm:ss'));
        this.setState({
            aDate: moment(Number(this.state.aUnixTimestamp * 1000)).format('YYYY-MM-DD HH:mm:ss')
        });
    }

    dateToUnix() {
        this.setState({
            bUnixTimeStamp:moment(this.state.bDate).format('X')
        });
    }

    render() {
        let { aUnixTimestamp, aDate, bDate, bUnixTimeStamp } = this.state;
        return (
            <Layout
            title={`Unix时间戳在线转换`}
            description="Unix时间戳在线转换, Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。">
                <div style={{textAlign: 'center', marginTop: 30}}>
                    <Space style={{textAlign: 'left'}}>
                        当前时间戳: {moment().format('X')}
                    </Space>
                    <p></p>
                    <Space>
                        时间戳（秒）
                        <Input placeholder="unix时间戳" value={aUnixTimestamp} key={aUnixTimestamp}
                            onChange={(e)=> {
                                const {value} = e.target;
                                this.setState({
                                    aUnixTimestamp: value
                                })
                            }} 
                        />
                        <Button onClick={this.unixToDate}>转换 ></Button>
                        
                        <Input placeholder="转换后的北京时间" value={aDate} />
                    </Space>

                    <p></p>

                    <Space>
                    北&nbsp;&nbsp;京&nbsp;&nbsp;时&nbsp;&nbsp;间&nbsp;&nbsp;
                        <Input placeholder="北京时间" defaultValue={bDate}  key={bDate} 
                            onChange={(e)=> {
                                const {value} = e.target;
                                this.setState({
                                    bDate: value
                                })
                            }} 
                        />
                        <Button onClick={this.dateToUnix}>转换 ></Button>
                        <Input placeholder="转换后的unix时间戳" value={bUnixTimeStamp} />
                    </Space>
                </div>
            </Layout>
        );
    }
}