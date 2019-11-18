import random

string1 = input("Enter the string : ")
string = string1.lower()
a = [random.choice(string) for _ in range(13)]
st = "".join(a)
print(a)
print(st)




#########################################################################
#output ==>>
'''
Enter the string : ADSDFGHwerty123456
['r', '4', '2', 'g', 'f', 'y', 'a', 'r', '3', '6', 'r', 'e', 'y']
r42gfyar36rey

'''

