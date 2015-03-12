mysql的一些操作意义：

show databases;
显示数据库的列表

use Commodity;
使用这个数据库

show tables
显示这个数据库的数据表

describe person
显示某个数据表的结构

create database 库名
建库

drop database
删库
drop table
删表

delete from 表名
表中记录清空
或者使用
truncate table 表名

select * from 表名
select * from company where id = 3055
select * from company where id = 3055\G


explain <table_name>
查看sql语句的效率

explain select * from t3 where id = 22222;



mysql -h主机地址 -u用户名 －p用户密码


alter table t1 rename t2
重命名表

alter table t1 rename as table2;

alter table table1 modify id int unsigned;

alter table table1 add index ind_id;创建索引

create index ind_id on table1;

create unique index ind_id on table1;


drop index ind_id on table1;
alter table table1 drop index ind_id;



alter add命令格式：alter table 表名 add字段 类型 其他;


总结需要实现这些功能：
1、所有的添加默认值
2、修改某个的值
3、修改一部分的某个值
4、修改这个值的类型
5、删除值



1
alter table XXX add XXXX INT NULL;
alter table XXX add XXXX INT default '1';
2
alter table XXX change nnn1 nnn2 INIT; 一定要制定类型ter luse
5
alter table XXX drop column XXX;
