create database company;
use company;
create table department(deptid int primary key,deptname varchar(50));
insert into department values(101,'hr');
delete from department where deptid=12;
insert into department values(102,'account');
select*from department;
create table employee(empid int primary key,empname varchar(50),salay int,gender varchar(10),designation varchar(50));
insert into employee values(1001,'dhaneesh',10000,'male','trainee');
insert into employee values(1002,'bhadran',20000,'male','trainee');
insert into employee values(1003,'sonu',15000,'male','manager');
insert into employee values(1004,'adarsh',10000,'male','trainee');
insert into employee values(1005,'ajay',10000,'male','jr trainee');
insert into employee values(1006,'sethu',15000,'male','manager');


select*from employee where salay>=15000
select*from employee where designation='manager' or empid=1001;
select*from employee;
select*from employee order by salay desc;
select empname,salay,designation from employee where (salay=10000 or salay=15000) and designation='manager';

select*from employee where empname like 'a%';
select*from employee where empid not in(1001,1003,1005);


