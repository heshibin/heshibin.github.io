---
title: 日期时间相关
description: Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。如果你使用的是Java 8或更高版本，你可以使用 `Instant` 类在Java中获得unix时间戳。
date: 2023-02-04
authors: heshibin
tags: [java, 代码, 工具类]
---

Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。

## 在Java中获取unix时间戳的方法

### 使用即时类
如果你使用的是Java 8或更高版本，你可以使用 `Instant` 类在Java中获得unix时间戳。

```java
import java.time.Instant;

public static void main(String[] args) {
  long unixTimestamp = Instant.now().getEpochSecond();
  System.out.println("Unix timestamp: "+unixTimestamp);
}

// Unix timestamp: 1675500015
```

### 使用System.currentTimeMillis()
你可以避免创建日期/即时对象，并使用 `System.currentTimeMillis()` 来获得以毫秒为单位的当前时间。你可以通过1000L ，将毫秒转换为秒。
```java
public static void main(String[] args) {
  long unixTimestamp = System.currentTimeMillis()/1000L;
  System.out.println("Unix timestamp: " + unixTimestamp);
}

// Unix timestamp: 1675500095
```

### 使用Date的getTime()方法
你可以使用传统的Date的`getTime()`方法来获得Java中的unix时间戳。你需要将()时间除以1000L ，将毫秒转换为秒。
```java
public static void main(String[] args) {
  long unixTimestamp = new Date().getTime()/1000L;
  System.out.println("Unix timestamp: " + unixTimestamp);
}

// Unix timestamp: 1675500240
```

## 在Java中把Date转换为unix时间戳

### 使用即时类
你可以使用 `toInstant()` 方法从Date对象中获得 `Instant()` ，使用 `getEpochSecond()` 获得unix时间戳。
```java
public static void main(String[] args) {
    Calendar cal = Calendar.getInstance();
    cal.set(Calendar.DAY_OF_MONTH, 4);
    cal.set(Calendar.MONTH, 2);
    cal.set(Calendar.YEAR, 2023);

    Date givenDate = cal.getTime();
    long unixTimestamp = givenDate.toInstant().getEpochSecond();
    System.out.println("Unix timestamp: "+unixTimestamp);
}

// Unix timestamp: 1677919638
```

你也可以用`LocalDate`代替`java.util.Date` 。你需要先把`LocalDate`转换为`Instant`，然后用 `getEpochSecond()` ，在Java中把LocalDate转换为unix时间戳。
```java
public static void main(String[] args) {
  // Get LocalDate object
  LocalDate localDate = LocalDate.of(2023,2,4);

  // Convert LocalDate to Instant with ZoneOffSet
  Instant instant = localDate.atStartOfDay().toInstant(ZoneOffset.UTC);

  // Get unix timestamp from Instant
  long epochSecond = instant.getEpochSecond();
  System.out.println("Unix timestamp: "+epochSecond);
}

// Unix timestamp: 1675468800
```

### 使用Date的getTime()方法
你可以使用传统的Date的`getTime()`方法，在Java中把Date转换为unixTimeStamp。你需要将()时间除以1000L ，将毫秒转换为秒。
 ```java
public static void main(String[] args) {
  Calendar cal = Calendar.getInstance();
  cal.set(Calendar.DAY_OF_MONTH, 4);
  cal.set(Calendar.MONTH, 2);
  cal.set(Calendar.YEAR, 2023);

  Date givenDate = cal.getTime();
  long unixTimestamp = givenDate.getTime()/1000L;
  System.out.println("Unix timestamp: "+unixTimestamp);
}

// Unix timestamp: 1677919718
 ```
