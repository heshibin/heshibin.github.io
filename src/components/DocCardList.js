import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
const { Text, Link } = Typography;

export default function DocCardList() {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="JAVA" bordered={false}>
            常用java工具类，知识点等
                 <Link href="/JAVA/知识点/2023-01/01什么是try-with-resource">
                  前往
                </Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="前端" bordered={false}>
            javascript、jquery、html、react等
             <Link href="/前端/react相关">
                  前往
                </Link>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="工具" bordered={false}>
            一些开发工具等<Link href="/download">
                  前往
                </Link>
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Card title="面试题" bordered={false}>
            java基础面试题...<Link href="/面试题/zookeeper">
                  前往
                </Link>
          </Card>
        </Col>
        <Col span={8}>
          
        </Col>
        <Col span={8}>
          
        </Col>
      </Row>
    </div>
  )
}
