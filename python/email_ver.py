import pymysql
cnx = pymysql.connect(user='root', password='Abc@1234',
                              host='127.0.0.1',
                              database='email_verify')
cur = cnx.cursor()

'''
f = open('email_verify.csv','w+')
for i in range(1,100):
	f.write("ramsingh"+str(i)+"@gmail.com"+"\n")

f.close()
'''

'''
f1 = open('email_verify.csv','r')
a = f1.read()
print(a)
f1.close()

'''


lst = []
f2 = open('email_verify.csv','r')
a = f2.read()
lst.append(a)
#print(lst)
f2.close()
l = lst[0].split('\n')
#print(l)
set_l =  set(l)
for i in set_l:
	#print(i)
	sql = "insert into student_email (Email_id) values ('"+str(i)+"')"
	cur.execute(sql)
	cnx.commit()
	#print(sql)

cnx.close()

#print(cnx)   
