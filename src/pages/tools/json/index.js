import React from 'react';
import ReactJson from 'react-json-view';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Col, Input, Row, Alert, Typography  } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text, Link } = Typography;
export default class ReactJsonView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            mockJson:{},
            errorMsg:''
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    //改变textarea内容
    handleChange(e){    
        const str = e.target.value;
        this.setState({
            mockJson: str,
        })
    }

    render(){
        let { mockJson, errorMsg } = this.state;
        try {
            errorMsg = '';
            if(mockJson.length > 0) {
                mockJson =  JSON.parse(mockJson);
            }
        } catch(e) {
            console.log(e.message);
            mockJson = mockJson;
            errorMsg = e.message;
        }
        return(
            
                
                <BrowserOnly>
                {() => {
                    return (
                        <>
                        <Layout
                title={`JSON在线格式化工具`}
                description="JSON在线格式化工具">
                        <Typography style={{margin: '10px'}}>
                    <Title>JSON在线格式化</Title>
                    <Paragraph>
                        采用<Text code>react-json-view</Text>实现。
                    </Paragraph>
                </Typography>
                {errorMsg.length > 0 && (
                    <Alert message={errorMsg} type="error" showIcon banner />
                )}
                <Row style={{margin: '10px'}}>
                    <Col flex={2}>
                        <TextArea rows={20} placeholder="请输入JSON数据..." onChange={this.handleChange}/>
                    </Col>
                    <Col flex={3}>
                        <ReactJson
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
                            />
                    </Col>
                </Row></Layout>
                        </>
                    )
                }}
                </BrowserOnly>
                
        )
    }
}