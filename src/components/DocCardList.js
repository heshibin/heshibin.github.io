import React from 'react';
import { Card, Col, Row, Typography, Avatar, Divider, Space, Tag } from 'antd';
const { Title, Text, Link,Paragraph } = Typography;
import { AntDesignOutlined } from '@ant-design/icons';

export default function DocCardList() {
  return (
    <div className="site-card-wrapper">

      <Card style={{ textAlign: 'center', boxShadow: 'none' }} bordered={false}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
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

      </Card>


      {/* <Row gutter={16}>
        <Col span={8}>
          <Card title="JAVA" bordered={false}>
            常用java工具类，知识点等
                 <Link href="/docs/JAVA/小记/2023-01/01什么是try-with-resource">
                  前往
                </Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="前端" bordered={false}>
            javascript、jquery、html、react等
             <Link href="/docs/前端/react相关">
                  前往
                </Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="工具" bordered={false}>
            一些开发工具等<Link href="/docs/download">
                  前往
                </Link>
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{marginTop: '10px'}}>
        <Col span={8}>
          <Card title="面试题" bordered={false}>
            java基础面试题...<Link href="/docs/面试题/zookeeper">
                  前往
                </Link>
          </Card>
        </Col>
        <Col span={8}>
          
        </Col>
        <Col span={8}>
          
        </Col>
      </Row> */}
    </div>
  )
}
