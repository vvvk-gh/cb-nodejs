# Mysql 

## Create a new database

```terminal
    
    mysql -u root -p
    //enter your password 
    
    mysql>
```

## Create a new user , grant privileges


```mysql 

CREATE USER sampleuser1 IDENTIFIED BY 'samplepass1';
GRANT ALL PRIVILEGES ON `sampledb1`.* TO 'sampleuser1'@'localhost';
FLUSH PRIVILEGES;
exit

```

## Verifying

```terminal
mysql -u sampleuser -p 
//enter your password

```

``` mysql

mysql > SHOW databases;
//should show your sampledb1 database; 

```

