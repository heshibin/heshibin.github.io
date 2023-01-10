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
                {key: 'sanlie', label: `散列算法`, children: (
                    <>
                        <b>MD5</b>
                        <Paragraph>
                             <Text code>MD5</Text>是一种广泛使用的散列函数。它被用于各种安全应用，也通常用于校验文件的完整性。但<Text code>MD5</Text>不耐碰撞攻击，因此不适用于<Text code>SSL</Text>证书或数字签名。
                            <p><Text code>var hash = CryptoJS.MD5("Message");</Text></p>
                        </Paragraph>
            
                        <b>SHA-1</b>
                        <Paragraph>
                            <Text code>SHA</Text>散列函数由美国国家安全局 (NSA) 设计。 <Text code>SHA-1</Text>是现有<Text code>SHA</Text>散列函数中最成熟的，它用于各种安全应用程序和协议。但随着新攻击的发现或改进，<Text code>SHA-1</Text>的抗攻击能力一直在减弱。
                            <p><Text code>var hash = CryptoJS.SHA1("Message");</Text></p>
                        </Paragraph>
        
                        <b level={6}>SHA-2</b>
                        <Paragraph>
                            <Text code>SHA-224、SHA-256、SHA-384</Text>，和<Text code>SHA-512</Text>合称为<Text code>SHA-2</Text>。
                        </Paragraph>
                        <Paragraph>
                            <Text code>SHA-256</Text>是<Text code>SHA-2</Text>集合中的四个变体之一。虽然它提供了更好的安全性，但是它的应用不如<Text code>SHA-1</Text>广泛。
                        </Paragraph>    
                        <p><Text code>var hash = CryptoJS.SHA256("Message");</Text></p>
                        <Paragraph>
                            <Text code>SHA-512</Text>在很大程度上与<Text code>SHA-256</Text>相同，但在64位计算机上<Text code>SHA-512</Text>比<Text code>SHA-256</Text>更快(因为它们在内部使用64位算术)；在8位，16位和32位计算机上，<Text code>SHA-256</Text>比<Text code>SHA-512</Text>更快。
                        </Paragraph>
                        <p><Text code>var hash = CryptoJS.SHA512("Message");</Text></p>
                        <Paragraph>
                            <Text code>CryptoJS</Text>还支持<Text code>SHA-224</Text>和<Text code>SHA-384</Text>，这两个版本大致相同，分别是<Text code>SHA-256</Text>和<Text code>SHA-512</Text>的删减版本。
                        </Paragraph>
        
                        <b level={6}>SHA-3</b>
                        <Paragraph>
                            <Text code>SHA-3</Text>是第三代安全散列算法(Secure Hash Algorithm 3)。
                            <Text code>var hash = CryptoJS.SHA3("Message");</Text>
                            <Text code>SHA-3</Text>可以配置输出散列长度为224，256，384或512位，默认为512位。
                            <Text code>
                                <pre>
                                    var hash = CryptoJS.SHA3("Message", { outputLength: 512 });
                                    var hash = CryptoJS.SHA3("Message", { outputLength: 384 });
                                    var hash = CryptoJS.SHA3("Message", { outputLength: 256 });
                                    var hash = CryptoJS.SHA3("Message", { outputLength: 224 });
                                </pre>
                            </Text>
                        </Paragraph>
        
                        <Title level={6}>RIPEMD-160</Title>
                        <Text code>var hash = CryptoJS.RIPEMD160("Message");</Text>
                    </>
                )},
                
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
                    <TextArea placeholder="请输入待加密数据..." onChange={this.handleChange}></TextArea>

                    <Space wrap style={{marginTop: 10, marginBottom: 10}}>
                      <Button type="primary" onClick={this.md5}>MD5</Button>
                      <Button type="primary" onClick={this.SHA1}>SHA1</Button>
                      <Button type="primary" onClick={this.SHA256}>SHA256</Button>
                      <Button type="primary" onClick={this.SHA512}>SHA512</Button>
                    </Space>
                  
                    <TextArea placeholder="加密后数据..." value={result} />
                     
                    <Title level={4} style={{marginTop: '10px'}}>介绍</Title>    

                    <Paragraph>
                        <Text code>CryptoJS</Text>是一个JavaScript的加解密的工具包。它支持多种的算法：<Text code>MD5、SHA1、SHA2、SHA3、RIPEMD-160</Text> 哈希散列，进行 <Text code>AES、DES、Rabbit、RC4、Triple DES</Text> 加解密。
                    </Paragraph>
                        
                    <Tabs defaultActiveKey="md5" items={introduces} />
                </div>
            </Layout>
        )
    }
}
