import React, { useEffect, useState } from 'react';

import axios from 'axios';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Layout from '@theme/Layout';
import moment from 'moment';
import { Col, Input, Row, Alert, Typography, Button, Space, Image  } from 'antd';
const { TextArea } = Input;
const { Title, Paragraph, Text, Link  } = Typography;

/**
 * 摸鱼日历
 * @returns 
 */
const MoyuView = () => {

  // 日期
  const [date, setDate] = useState();
  // 星期几
  const [week, setWeek] = useState();
  // TODO 判断上午还是下午
  const [time, setTime] = useState("上午");
  // 开工多少天
  const [workDays, setWorkDays] = useState();
  // 距离月底多少天
  const [monthEndDays, setMonthEndDays] = useState();
  // 距离5号还有多少天
  const [month5Days, setMonth5Days] = useState();
  // 距离10号还有多少天
  const [month10Days, setMonth10Days] = useState();
  // 距离15号还有多少天
  const [month15Days, setMonth15Days] = useState();
  // 距离20号还有多少天
  const [month20Days, setMonth20Days] = useState();
  // 距离15号还有多少天
  const [month25Days, setMonth25Days] = useState();
  // 距离周末还有多少天
  const [saturdayDays, setSaturdayDays] = useState();
  // 距离清明
  const [qingmingDays, setQingmingDays] = useState();
  // 五一
  const [wuyiDays, setWuyiDays] = useState();
  // 端午
  const [duanwuDays, setDuanwuDays] = useState();
  // 中秋国庆
  const [zhongqiuDays, setZhongqiuDays] = useState();
  // 2024
  const [chunjieDays, setChunjieDays] = useState();
  
  const [url, setUrl] = useState();

  useEffect(() => {
    // 当前年
    const year = 2023;

    moment.locale('zh-cn');
    setDate(moment().format('LL'));
    setWeek(moment().format('dddd'));
    setWorkDays(moment(new Date()).diff('2023-01-28 09:00', 'days'));
    setMonthEndDays(moment(moment().endOf('month').format('YYYY-MM-DD HH:mm')).diff(new Date(), 'days'));
    
    // 当前日
    let day = moment().date();
    // 当前月
    let month = moment().day();
    // 下个月月份
    let nextMonth = moment().add(1,'M').format("MM");
    if(day >= 5) {
      setMonth5Days(moment(year + "-"+nextMonth+"-05 09:00").diff(new Date, 'days'));
    } else {
      setMonth5Days(moment(year + "-"+month+"-05 09:00").diff(new Date, 'days'));
    }
    
    if(day >= 10) {
      setMonth10Days(moment(year + "-"+nextMonth+"-10 09:00").diff(new Date, 'days'));
    } else {
      setMonth10Days(moment(year + "-"+month+"-10 09:00").diff(new Date, 'days'));
    }

    if(day >= 15) {
      setMonth15Days(moment(year + "-"+nextMonth+"-15 09:00").diff(new Date, 'days'));
    } else {
      setMonth15Days(moment(year + "-"+month+"-15 09:00").diff(new Date, 'days'));
    }

    if(day >= 20) {
      setMonth20Days(moment(year + "-"+nextMonth+"-20 09:00").diff(new Date, 'days'));
    } else {
      setMonth20Days(moment(year + "-"+month+"-20 09:00").diff(new Date, 'days'));
    }

    if(day >= 25) {
      setMonth25Days(moment(year + "-"+nextMonth+"-25 09:00").diff(new Date, 'days'));
    } else {
      setMonth25Days(moment(year + "-"+month+"-25 09:00").diff(new Date, 'days'));
    }
    
    //计算今天是这周第几天
    let weekOfDay = parseInt(moment().format('E'));
    setSaturdayDays(moment(moment().startOf('day').subtract(weekOfDay - 7, 'days').toDate()).diff(new Date(), 'days'));
  
    setQingmingDays(moment(year + '-04-05 09:00').diff(new Date(), 'days'));
    setWuyiDays(moment(year + '-04-29 09:00').diff(new Date(), 'days'));
    setDuanwuDays(moment(year + '-06-22 09:00').diff(new Date(), 'days'));
    setZhongqiuDays(moment(year + '-09-29 09:00').diff(new Date(), 'days'));
    setChunjieDays(moment((year+1) + '-02-09 09:00').diff(new Date(), 'days'));

   
    // handlePage.queryImage();

    axios.get('https://api.vvhan.com/api/moyu?type=json')
        .then(res => {
          setUrl(res.data.url)
        })


  }, []);

  return (
    <Layout
      title={`摸鱼人日历`}
      description={`今天是`+{date}+`，`+{week}+`。你好，摸鱼人！即使今天是开工第 `+{workDays}+` 天，也一定不要忘记摸鱼哦！有事没事起身去茶水间，去厕所，去廊道走走，别总在工位上坐着，钱是老板的，但健康是自己的。`}>
        <Row style={{marginTop: '30px'}}>
          <Col  xs={3} sm={4} md={6} lg={6} xl={6}>
          <Image
            src={url}
            fallback="data:image/png;base64,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"
          />
          </Col>
          <Col  xs={21} sm={16} md={12} lg={12} xl={12} style={{padding: '0 10px', textAlign: 'center'}}>
          <p style={{textAlign: 'center'}}>
            <img src="/img/moyu.jpg"></img>
          </p>
          今天是{date}，{week}。你好，摸鱼人！<br></br>
          即使今天是开工第 {workDays} 天，也一定不要忘记摸鱼哦！有事没事起身去茶水间，去厕所，去廊道走走，别总在工位上坐着，钱是老板的，但健康是自己的。<br></br>
          温馨提示：<br></br>
          离【月底发工资】：{monthEndDays}天<br></br>
          离【05号发工资】：{month5Days}天<br></br>
          离【10号发工资】：{month10Days}天<br></br>
          离【15号发工资】：{month15Days}天<br></br>
          离【20号发工资】：{month20Days}天<br></br>
          离【25号发工资】：{month25Days}天<br></br>
          距离【周末】还有：{saturdayDays}天<br></br>
          距离【清明假期】还有：{qingmingDays+1}天<br></br>
          距离【五一假期】还有：{wuyiDays+1}天<br></br>
          距离【端午假期】还有：{duanwuDays+1}天<br></br>
          距离【中秋国庆】还有：{zhongqiuDays+1}天<br></br>
          距离【2024年】还有：{chunjieDays+1}天<br></br>

          
          </Col>
          <Col xs={2} sm={4} md={6} lg={6} xl={6}></Col>
        </Row>
      
    </Layout>
  )
};

export default MoyuView;
