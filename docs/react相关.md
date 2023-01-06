## 跳转页面清除定时器
使用useEffect
```
const timer = useRef();
useEffect(()=> {
  if(timer.current != null) {
    clearInterval(timer.current);
  }

  // 清除定时器
  return () => clearInterval(timer.current);
}, []);
```
