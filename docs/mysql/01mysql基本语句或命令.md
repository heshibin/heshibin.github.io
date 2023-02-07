---
title: mysql基本语句或命令
description: mysql基本语句或命令
tags: [mysql]
---

#### 启动或停止mysql
`net start/stop mysql`

#### 进入mysql
`mysql -uroot -p`

#### 修改mysql账户密码
`alter user 'root'@'localhost' identified by 'root1234';`

#### 数据库相关
##### 1、查询所有数据库
`show databases;`
##### 2、查询当前所在数据库
`select databases();`
##### 3、创建数据库
`create database test;`
##### 4、进入数据库
`use test;`
##### 5、判断数据库是否存在 不存在则创建
`create database if not exists test1;`
##### 6、创建数据库并指定字符集
`create database test2 default character set gbk;`
##### 7、查看数据库字符集
`show create database test2;`
##### 8、查看当前mysql使用的字符集
`show variables like 'character%';`
#### 表相关
##### 9、创建表
```
create table student (
    id tinyint(5) zerofill auto_increment not null comment '学生学号',
    name varchar(20) default null comment '姓名',
    unique key (id)
);
约束条件:
comment       --- 说明解释备注
not null      --- 不为空
default       --- 默认值
unsigned      --- 无符号（即正数）
auto_increment--- 自动递增
zerofill      --- 自动填充
unique key    --- 唯一值
```
##### 10、查看数据库中有哪些表
`show tables;`
##### 11、查看表结构信息、创建表语句
```
desc student;
或者show table student;
或者show table student\G
\G: 有结束sql语句的作用，还有把显示的结果纵向旋转90°。
```
##### 12、复制表结构创建新表
`create table teacher as select * from student;`

`create table teacher like student;`
##### 13、修改表名
`rename table student to stu;`
##### 14、添加列
```
给表添加一列
alter table stu add age int(3) not null comment '年龄';
（alter table 表名 add 列名 类型 comment 说明）
在表最前面添加一列
alter table 表名 add 列名 类型 comment '' first;
在表某一列后添加一列
alter table 表名 add 列名 类型 comment '' after 列名;
```
##### 15、修改列类型
`alter table 表名 modify int(10);`
##### 16、修改列名
`alter table 表名 change 旧列名 新列名 类型;`
##### 17、删除列
`alter table 表名 drop 列;`
##### 18、修改字符集
`alter table 表名 character set 字符集;`
##### 19、删除表
`drop table if exists 表名;`
