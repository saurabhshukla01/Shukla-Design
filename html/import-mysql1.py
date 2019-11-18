import mysql.connector
db_connection = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="Abc@1234"
)
print(db_connection)

