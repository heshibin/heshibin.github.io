import React from 'react';
import { Card, Col, Row, Typography, Avatar, Divider, Space, Tag } from 'antd';
const { Title, Text, Link,Paragraph } = Typography;
import { SmileOutlined  } from '@ant-design/icons';

export default function DocCardList() {
  return (
    <div className="site-card-wrapper">

      <Card style={{ textAlign: 'center', boxShadow: 'none' }} bordered={false}>
        <Avatar
          size={64}
          src={"http://cdn.machu.top/github/avatar.jpeg"}
        />

        <p></p>

        <Paragraph>
          <Title level={3} className='index-title'>Ma Chu</Title>

          <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=100&size=14&pause=1000&color=699DFF&vCenter=true&multiline=true&width=435&lines=%E6%88%90%E5%8A%9F%E9%9C%80%E8%A6%81%E6%88%90%E6%9C%AC%EF%BC%8C%E6%97%B6%E9%97%B4%E4%B9%9F%E6%98%AF%E4%B8%80%E7%A7%8D%E6%88%90%E6%9C%AC%EF%BC%8C+%E5%AF%B9%E6%97%B6%E9%97%B4%E7%9A%84%E7%8F%8D%E6%83%9C%E5%B0%B1%E6%98%AF%E5%AF%B9%E6%88%90%E6%9C%AC%E7%9A%84%E8%8A%82%E7%BA%A6%E3%80%82" alt="Typing SVG" /></a>        
        
        </Paragraph>

        <Divider />

        <Space size={[0, 8]} wrap>
          <Tag color="magenta">java</Tag>
          <Tag color="red">spring</Tag>
          <Tag color="volcano">mysql</Tag>
          <Tag color="orange">中间件</Tag>
          <Tag color="gold">前端</Tag>
          <Tag color="lime">react</Tag>
          <Tag color="green">node</Tag>
          <Tag color="cyan">js</Tag>
          <Tag color="blue">工具</Tag>
          <Tag color="geekblue">面试</Tag>
        </Space>

        <p></p>
            
        <img src="https://count.getloli.com/get/@:heshibin?theme=gelbooru-h"></img>

      </Card>
    </div>
  )
}
