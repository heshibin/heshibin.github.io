import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import { Col, Input, Row, Alert, Typography, Button, Space  } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text, Link  } = Typography;
export default class ReactJsonView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            text: "",
            mockJson:{},
            errorMsg:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.compressJsonStr = this.compressJsonStr.bind(this);
        this.escapeJsonStr = this.escapeJsonStr.bind(this);
        this.removeEscapeJsonStr = this.removeEscapeJsonStr.bind(this);
        this.mapToJson = this.mapToJson.bind(this);
        this.clearJsonStr = this.clearJsonStr.bind(this);
    }
    
    //改变textarea内容
    handleChange(e){    
        const str = e.target.value;
        this.setState({
            text: str,
            mockJson: str
        })
    }

    // 压缩
    compressJsonStr() {
        var str = JSON.stringify(JSON.parse(this.state.text));
        this.setState({
            text: str
        })
    }

    // 转义
    escapeJsonStr() {
        var str = JSON.stringify(JSON.parse(this.state.text)).replace(/\"/g, '\\');
        this.setState({
            text: str
        })
    }

    // 去除转义
    removeEscapeJsonStr() {
        var str = this.state.text.replace(/\\/g, '');
        this.setState({
            text: str
        })
    }
    
    // map转json
    mapToJson() {
        var strMap = this.state.text;
        let obj= Object.create(null);
        for (let[k,v] of strMap) {
          obj[k] = v;
        }
        
        this.setState({
            text: JSON.stringify(obj)
        })
    }

    // 清空
    clearJsonStr() {
        this.setState({
            text: '',
            mockJson: ''
        })
    }

    render() {
        let { mockJson, errorMsg, text } = this.state;
        try {
            errorMsg = '';
            if(mockJson.length > 0) {
                mockJson =  JSON.parse(mockJson);
            }
        } catch(e) {
            mockJson = mockJson;
            errorMsg = e.message;
        }

        return (
            <Layout
                title={`JSON在线格式化工具`}
                description="JSON在线格式化工具 压缩 转义 map字符串转json react-json-view">

                <div style={{margin: '10px'}}>
                <Typography>
                    <Title>JSON在线格式化</Title>
                    <Paragraph>
                        采用<Text code>react-json-view</Text>实现。<Link href="https://github.com/heshibin/heshibin.github.io/blob/main/src/pages/tools/json.js">查看源码</Link>
                    </Paragraph>
                </Typography>
                {errorMsg.length > 0 && (
                    <Alert message={errorMsg} type="error" showIcon banner />
                )}

                <Space wrap>
                    <Button type="primary" onClick={this.compressJsonStr}>压缩</Button>

                    <Button type="primary" onClick={this.escapeJsonStr}>转义</Button>

                    <Button type="primary" onClick={this.removeEscapeJsonStr}>去除转义</Button>

                    <Button type="primary" onClick={this.mapToJson}>map字符串转json</Button>

                    <Button type="primary" onClick={this.clearJsonStr}>清空</Button>

                    
                </Space>

                <Row style={{marginTop: '10px'}}>
                    <Col flex={2}>
                        <TextArea rows={20} placeholder="请输入JSON数据..." onChange={this.handleChange} value={text}/>
                    </Col>
                    <Col flex={3}>
                    <BrowserOnly>
                        {() => {
                            const ReactJson = require('react-json-view').default;
                            return <ReactJson
                                collapsed={false}//是否收起,true为收起
                                indentWidth={10}//缩进
                                iconStyle='circle'
                                src={mockJson}
                                theme='monokai'
                                collapseStringsAfterLength={10}//字符串多长时用省略号
                                enableClipboard={true}//点击向左箭头进行复制
                                displayObjectSize={false}//显示有多少个items属性
                                displayDataTypes={false}//显示值的类型
                                onEdit={(edit)=>{console.log(edit)}}//编辑完成前调用回调函数
                                onAdd={(add)=>{console.log(add)}}//添加属性
                                defaultValue='malinshu'//添加属性后的默认值
                                onDelete={(onDelete)=>{console.log(onDelete)}}//删除属性
                                onSelect={(onSelect)=>{console.log(onSelect)}}//单击键值对的值时触发
                                sortKeys={true}//键的排序
                                quotesOnKeys={false}//是否显示键的引号
                                groupArraysAfterLength={5}//数组为多少个的时候被拆分显示
                            />;
                        }}
                        </BrowserOnly>
                    </Col>
                </Row>
                </div>
        </Layout>
        )
    }
}
