import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright}) {

  const [runTimeTxt, setRunTimeTxt] = useState("");

  useEffect(() => {
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
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
            {runTimeTxt}
          </div>
        )}
      </div>
    </footer>
  );
}
