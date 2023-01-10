import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import { Col, Input, Row, Alert, Typography, Button, Space, Tabs  } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text, Link  } = Typography;
const CryptoJS = require("crypto-js");

export default class ReactJsonView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            text: '',
            result: '',
            introduces: [
                {key: 'md5', label: `MD5`, children: `MD5是一种广泛使用的散列函数。它被用于各种安全应用，也通常用于校验文件的完整性。但MD5不耐碰撞攻击，因此不适用于SSL证书或数字签名。`},
                {key: 'SHA-1', label: `SHA-1`, children: `SHA 散列函数由美国国家安全局 (NSA) 设计。SHA-1 是现有 SHA 散列函数中最成熟的，它用于各种安全应用程序和协议。但随着新攻击的发现或改进，SHA-1 的抗攻击能力一直在减弱。`}
            ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.md5 = this.md5.bind(this);
        this.SHA1 = this.SHA1.bind(this);
        this.SHA256 = this.SHA256.bind(this);
        this.SHA512 = this.SHA512.bind(this);
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
    
    SHA1() {
      console.log(this.state.text);
      this.setState({
        result: CryptoJS.SHA1(this.state.text)
      })
    }
    
    SHA256() {
      console.log(this.state.text);
      this.setState({
        result: CryptoJS.SHA256(this.state.text)
      })
    }
    
    SHA512() {
      console.log(this.state.text);
      this.setState({
        result: CryptoJS.SHA512(this.state.text)
      })
    }

    render() {
        let { text, result,introduces } = this.state;

        return (
            <Layout
                title={`在线加解密工具`}
                description="在线加解密工具 md5加密 sha1 sha256 sha512">

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
                      <Button type="primary" onClick={this.SHA1}>SHA1</Button>
                      <Button type="primary" onClick={this.SHA256}>SHA256</Button>
                      <Button type="primary" onClick={this.SHA512}>SHA512</Button>
                    </Space>
                  
                    <TextArea maxLength={100} value={result} />
                        
                    <Tabs defaultActiveKey="md5" items={introduces} />
                </div>
            </Layout>
        )
    }
}
