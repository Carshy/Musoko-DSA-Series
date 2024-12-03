# list in python is a data structure or rather a variable that is used to hold mutable data. what i mean is that it can hold different types of data for instance a string, a number, a float, or even a boolean

def sqrList(lst):
  sqrd = [x**2 for x in lst if x % 2 != 0]
  return sqrd
print(sqrList([3, 7, 4, 2, 10])) ## [9, 49]