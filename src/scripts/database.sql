USE master
IF EXISTS(select *
from sys.databases
where name='GirlHackDB')
DROP DATABASE GirlHackDB

CREATE DATABASE GirlHackDB;
GO