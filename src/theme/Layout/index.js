import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useKeyboardNavigation} from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import styles from './styles.module.css';
import { Alert, Space, Affix, FloatButton,Image } from 'antd';
import { GithubOutlined, QqOutlined,WechatOutlined,MailOutlined } from '@ant-design/icons';
export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;
  useKeyboardNavigation();

  const [qqurl, setQqurl] = useState("tencent://Message/?Uin=485997600&amp;websiteName=q-zone.qq.com&amp;Menu=yes");
  
  const [runTimeTxt, setRunTimeTxt] = useState("");
  
  useEffect(() => {
    var userAgent = navigator.userAgent;
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      setQqurl("mqqwpa://im/chat?chat_type=wpa&uin=485997600&version=1&src_type=web&web_src=oicqzone.com");
    }
    
    setInterval(()=> {
      // 计算机中所使用的时间一般都是以毫秒开始计算的
      var seconds = 1000;
      var minutes = seconds * 60;
      var hours = minutes * 60;
      var days = hours * 24;
      var years = days * 365;
      var today = new Date();// 获取当前时间
      var todaySecond = today.getSeconds();// 秒
      var todayMinute = today.getMinutes();
      var todayHour = today.getHours();
      var todayDate = today.getDate();
      var todayMonth = today.getMonth()+1; //月份是0-11
      var todayYear = today.getFullYear();// 年

      var start_time = Date.UTC(2022, 11, 30, 0, 0, 0);
   // 开始运行的时间（时间戳格式）
      var now_time = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);// 当前时间（时间戳）
      var run_time = now_time - start_time;

      var run_time_year = Math.floor(run_time/years);
      var run_time_date = Math.floor(run_time/days%365);
      var run_time_hour = Math.floor(run_time/hours%24);
      var run_time_minute = Math.floor(run_time/minutes%60);
      var run_time_second = Math.floor(run_time/seconds%60);
      if (run_time_year < 1){
          run_time_year = 0;
      }
      setRunTimeTxt("站点已持续运行：" + run_time_year + "年" + run_time_date + "天" + run_time_hour + "小时" + run_time_minute + "分" + run_time_second + "秒");
    }, 1000);
  }, []);
  return (
    <LayoutProvider>
      {/* <Affix> */}
        {/* <Alert message="🎉 2023新年快乐" showIcon={false} banner closable className='layout-banner' /> */}
      {/* </Affix> */}
      {/* <div style={{height: '20px'}}></div> */}
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName,
        )}>
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
      
      <div style={{textAlign: 'center', backgroundColor: '#303846'}}>{runTimeTxt}</div>
       
      <FloatButton.Group shape="circle">
         <FloatButton icon={<WechatOutlined />}  tooltip={<Image src="/img/weixin.png" />}/>
 {/*     <FloatButton icon={<WechatOutlined />}  tooltip={<Image src="http://cdn.machu.top/github/weixin.png" />}/> */}
      <FloatButton icon={<QqOutlined />} href={qqurl} />
      <FloatButton icon={<MailOutlined />} href={"mailto: 495997600@qq.com"} />
      <FloatButton icon={<GithubOutlined />} href={"https://github.com/heshibin/heshibin"} />
      </FloatButton.Group>
    </LayoutProvider>
  );
}
