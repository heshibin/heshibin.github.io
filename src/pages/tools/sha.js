import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import { Col, Input, Row, Alert, Typography, Button, Space  } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text, Link  } = Typography;
const CryptoJS = require("crypto-js");

export default class ReactJsonView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            text: '',
            result: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.md5 = this.md5.bind(this);
    }

    handleChange(e){    
      const str = e.target.value;
      this.setState({
          text: str,
      })
    }

    md5() {
      console.log(this.state.text);
      this.setState({
        result: CryptoJS.MD5(this.state.text)
      })
    }


    render() {
        let { text, result } = this.state;

        return (
            <Layout
                title={`在线加解密工具`}
                description="在线加解密工具">

                <div style={{margin: '10px'}}>
                    <Typography>
                        <Title>在线加解密工具</Title>
                        <Paragraph>
                        <Text code>crypto-js</Text>实现。<Link href="https://github.com/heshibin/heshibin.github.io/blob/main/src/pages/tools/sha.js">查看源码</Link>
                        </Paragraph>
                    </Typography>
                    <TextArea maxLength={100} placeholder="请输入待加密数据..." onChange={this.handleChange}></TextArea>

                    <Space wrap style={{marginTop: 10, marginBottom: 10}}>
                      <Button type="primary" onClick={this.md5}>MD5</Button>
                    </Space>
                  
                    <TextArea maxLength={100} value={result} />
                </div>
            </Layout>
        )
    }
}
