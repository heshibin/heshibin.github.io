import React from 'react';
import { Card, Col, Row, Typography, Avatar, Divider, Space, Tag } from 'antd';
const { Title, Text, Link,Paragraph } = Typography;
import { SmileOutlined  } from '@ant-design/icons';

export default function DocCardList() {
  return (
    <div className="site-card-wrapper">

      <Card style={{ textAlign: 'center', boxShadow: 'none' }} bordered={false}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        />

        <p></p>

        <Paragraph>
          <Title level={3}>Ma Chu</Title>
          <Text>成功需要成本，时间也是一种成本， 对时间的珍惜就是对成本的节约。</Text>
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
          <Tag color="purple">生活</Tag>
        </Space>

        <Divider />
            
        <img src="https://count.getloli.com/get/@:heshibin?theme=gelbooru-h">
          
      </Card>
    </div>
  )
}
