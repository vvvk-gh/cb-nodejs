# Using MySQL

## Start MySQL Service

### Windows

Start the MySQL service (from Task Manager)

### Linux 

```shell
sudo service mysql start
```

### MacOS

Go to Settings > Mysql > Start MySQL Service 

or (if installed via Homebrew)

```shell
mysqld.service start
```

## Log in to MySQL as root

Without root password - 

```shell
mysql -u root
mysql> 
```

With root password - 

```shell
mysql -u root -p 
Enter Password: 

mysql> 
```

## Create DB, User, Grant access

```sql
CREATE DATABASE mytestdb;

CREATE USER myuser IDENTIFIED BY 'mypass';

USE mytestdb;

GRANT ALL PRIVILEGES ON mytestdb.* TO myuser;

FLUSH PRIVILEGES;
```

## Login using the new user

```shell
mysql -u myuser -p
Enter Password: (enter 'mypass' here)

mysql>
```

## Creating a table

```shell
create table test1 (id INTEGER PRIMARY KEY , data VARCHAR(40));
```


## Inserting data into the table

```shell
insert into test1 values (1 , 'aaa');
```



## Show rows and colums in the table

```shell
select * from test1;
```


## Delete the table

```shell
drop tables test1;
```

## Creating a table with autoincrement id

```shell

create table test1 (id INTEGER PRIMARY KEY AUTO_COMPLETE ,  data VARCHAR(40));

```

## Inserting data for the auto increment id 

```shell

insert into test1 (data) values ('aaa');
insert into test1 (data) values ('bbb');

```
Note : the id gets automatically updated and it takes the id value from its previous id value

if the user do the following 

```shell

insert into test1 values (10 ,'ccc');
insert into test1 (data) values ('bbb');

```

The output will be the following

```shell
+----+------------+
| id | data       |
+----+------------+
|  1 | first row  |
|  2 | second row |
| 10 | ccc        |
| 11 | bbb        |
+----+------------+
```
Which tells us it picks id its from previous highest position

