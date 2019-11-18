import MySQLdb
import os
import string

db = MySQLdb.connect (host="localhost",
    user="root",
    passwd="Abc@1234",
    db="email_verify",
    local_infile = 1) #Grants permission to write to db from an input file. Without this you get sql Error: (1148, 'The used command is not allowed with this MySQL version')

print("\nConnection to DB established\n")

#The statement 'IGNORE 1 LINES' below makes the Python script ignore first line on csv file
#You can execute the sql below on the mysql bash to test if it works
sqlLoadData = """load data local infile 'series_mbl_vcon_circle.csv' into table Series_Mbl FIELDS TERMINATED BY ',' 
                 ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 LINES;"""

try:
    curs = db.cursor()   
    curs.execute(sqlLoadData)
    db.commit()   
    print("SQL execution complete")   
    resultSet = curs.fetchall()   
except:    
    print("Error incurred: ")    
    db.rollback()
    db.close()
print("Data loading complete.\n")