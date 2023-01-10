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
            hanzi: 0,
            zhbiaodian: 0,
            zhongwenbiaodian: 0,
            yingwen: 0,
            shuzi: 0,
            numwords: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        var words = e.target.value;

        var W = new Object();
        var iNumwords = 0;
        var sNumwords = 0;
        var sTotal = 0; //双字节字符;
        var iTotal = 0; //中文字符；
        var eTotal = 0; //Ｅ文字符
        var inum = 0;
 
        for (var i = 0; i < words.length; i++) {
            var c = words.charAt(i);
            if (c.match(/[\u4e00-\u9fa5]/)) {
                if (isNaN(W[c])) {
                    iNumwords++;
                    W[c] = 1;
                }
                iTotal++;
            }
        }
 
        for (var i = 0; i < words.length; i++) {
            var c = words.charAt(i);
            if (c.match(/[^\x00-\xff]/)) {
                if (isNaN(W[c])) {
                    sNumwords++;

                }
                sTotal++;
            } else {
                eTotal++;
            }
            if (c.match(/[0-9]/)) {
                inum++;
            }
        }

        this.setState({
            hanzi: iTotal,
            zhbiaodian: sTotal - iTotal,
            zhongwenbiaodian: sTotal,
            yingwen: eTotal,
            shuzi: inum,
            numwords: iTotal * 2 + (sTotal - iTotal) * 2 + eTotal
        })
    }

    render() {
        let { hanzi, zhbiaodian, zhongwenbiaodian, yingwen, shuzi, numwords } = this.state;

        return (
            <Layout
                title={`在线字数统计工具`}
                description="在线字数统计工具">

                <div style={{margin: '10px'}}>
                    <Typography>
                        <Title>在线字数统计</Title>
                        <Paragraph>
                            纯js实现。<Link href="https://github.com/heshibin/heshibin.github.io/blob/main/src/pages/tools/word.js">查看源码</Link>
                        </Paragraph>
                    </Typography>

                    <p>
                        汉字：{hanzi} 个<br/>
                        中文标点：{zhbiaodian} 个<br/>
                        汉字+标点：{zhongwenbiaodian} 个<br/>
                        英文：{yingwen} 个（含英文状态下的数字、符号、标点）<br/>
                        数字：{shuzi} 个<br/>
                        字符总数：{numwords} 个字符<br/>
                        小贴士：汉字和中文标点算两个字符，数字、空格、英文字母，英文标点算做一个字符。
                    </p>
                    <TextArea showCount onChange={this.handleChange} />
                </div>
            </Layout>
        )
    }
}
