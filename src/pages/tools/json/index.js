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
            
                
                <></>
                
        )
    }
}