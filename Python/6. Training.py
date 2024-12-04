# list in python is a data structure or rather a variable that is used to hold mutable data. what i mean is that it can hold different types of data for instance a string, a number, a float, or even a boolean

# have a list of words, I want you to filter out the short words and then convert the longer words to uppercase

def highNum(nums):
  maxN = [i for i in nums if i == nums[-1]]
  return maxN
print(highNum([4, 5, 7, 9, 12, 13]))