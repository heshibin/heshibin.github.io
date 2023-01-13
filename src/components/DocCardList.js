import React from 'react';
import { Card, Col, Row } from 'antd';

export default function DocCardList() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="JAVA" bordered={false}>
            常用java工具类，知识点等
          </Card>
        </Col>
        <Col span={8}>
          <Card title="前端" bordered={false}>
            javascript、jquery、html、react等
          </Card>
        </Col>
        <Col span={8}>
          <Card title="工具" bordered={false}>
            一些开发工具等
          </Card>
        </Col>
      </Row>
    </div>
  )
}
