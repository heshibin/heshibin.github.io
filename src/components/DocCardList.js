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
          src={"/img/avatar.jpeg"}
        />

        <p></p>

        <Paragraph>
          <Title level={3} className='index-title'>Ma Chu</Title>

          <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=100&size=14&pause=1000&color=699DFF&vCenter=true&multiline=true&width=435&lines=%E6%88%90%E5%8A%9F%E9%9C%80%E8%A6%81%E6%88%90%E6%9C%AC%EF%BC%8C%E6%97%B6%E9%97%B4%E4%B9%9F%E6%98%AF%E4%B8%80%E7%A7%8D%E6%88%90%E6%9C%AC%EF%BC%8C+%E5%AF%B9%E6%97%B6%E9%97%B4%E7%9A%84%E7%8F%8D%E6%83%9C%E5%B0%B1%E6%98%AF%E5%AF%B9%E6%88%90%E6%9C%AC%E7%9A%84%E8%8A%82%E7%BA%A6%E3%80%82" alt="Typing SVG" /></a>        
        
        </Paragraph>

        <Divider />

        <p> <a href="https://angular.io" target="_blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.jenkins.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://redis.io" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" alt="redis" width="40" height="40"/> </a> <a href="https://spring.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="40" height="40"/> </a> <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a> </p>

        <p></p>

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

        <p></p>
            
        <img src="https://count.getloli.com/get/@:heshibin?theme=gelbooru-h"></img>

      </Card>
    </div>
  )
}
