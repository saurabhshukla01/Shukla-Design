'''
import mysql.connector


db_connection = mysql.connector.connect(
host= "localhost",
user= "root",
passwd= "Abc@1234"
)
# creating database_cursor to perform SQL operation
db_cursor = db_connection.cursor()
print(db_cursor)
# executing cursor with execute method and pass SQL query
db_cursor.execute("CREATE DATABASE second_db")
# get list of all databases
db_cursor.execute("SHOW DATABASES")
#print all databases
#for db in db_cursor:
	#print(db)
    
'''

import MySQLdb 
import csv

db = MySQLdb.connect(host="localhost", # The Host
                      user="root", # username
                      passwd="Abc@1234", # password
                      db="goscore") # name of the data base

 cursor = connection.cursor() 
 Query = """ LOAD DATA LOCAL INFILE 'usrl to csv file' INTO TABLE
 table_nameFIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED
 BY '"' Lines terminated by '\n' IGNORE 1 LINES """

cursor.execute(Query)   
connection.commit()   
cursor.close()