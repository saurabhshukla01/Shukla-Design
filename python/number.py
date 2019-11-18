															#  Format of number to change in word form  #
															#===========================================#
"""
types = {
	"C":10000000,
	"L":100000,
    "k":1000,
    "h":100,
    "T":10,
     "":1,
}

value=int(input("Enter the no : "))
def convert(from_unit_type, to_unit_type, value):
    from_type_units = types[from_unit_type]
    to_type_units = types[to_unit_type]

    new_value = value * (from_type_units / to_type_units)

    return str(new_value) + to_unit_type

unit1 = input ("Which unit would you like to convert from: ")
unit2 = input ("Which unit would you like to convert to: ")
num1 = int(input ("Enter your value: " ))

print(convert(unit1, unit2, float(num1)))

"""
#==============================================================================================================
'''

import math
import time

types = {
    "cr": 10000000,
    "L": 100000,
    "k": 1000,
    "h": 100,
    "t": 10,
}

def convert(from_unit_type, to_unit_type, value):
    from_type_units = types[from_unit_type]        # k   (1000)
    to_type_units = types[to_unit_type]			# h (10)

    new_value = value * (from_type_units / to_type_units)    # new_value = 100000  * (1000/10) ==>  10000000

    return str(new_value) + to_unit_type
print("Only using C,L,K,H,T ")
unit1 = input ("Which unit convert from: ")
unit2 = input ("Which unit convert to: ")
num1 = int(input ("Enter your value: " ))

print(convert(unit1, unit2, float(num1)))

'''

#==============================================================================================================================

n = int(input("Enter the no : "))
a = n%1000   # 10521 == 521
st = str(a//100)+"h"+" "+str(a%100)
n = n//1000
count = 0
lst = []
while n>0:
	b = n%100    # 10
	count = count + 1
	n = n//100   # 0
	if count == 1 and b!=0:
		lst.append(str(b) + "k")
	elif count == 2 and b!=0:
		lst.append(str(b) + "L")
	elif count == 3 and b!=0:
		lst.append(str(b) + "cr")
lst1=lst[::-1]
st1=" ".join(lst1)
print(st1+" "+st)


#============================================================================================================