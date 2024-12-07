"""
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
"""
# def validEl(nums, val):
#   k = 0
#   for i, num in enumerate(nums):
#     if num != val:
#       nums[k] = num
#       k += 1
#   return k
# print(validEl([3,2,2,3], 3)) ## 2

def validElements(nums, val):
  results = []
  for i, num in enumerate(nums):
    if num != val:
      results.append(num)
      return results
print(validElements([3, 2, 2, 3], 3))