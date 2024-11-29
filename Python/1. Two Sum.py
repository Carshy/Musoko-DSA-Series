"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
"""
def twoSum(nums, target):
  map = {}
  for i, num in enumerate(nums):
    diff = target - num
    if diff in map:
      return [map[diff], i]
    map[num] = i
print(twoSum([2,7,11,15], 9))
print(twoSum([4,8,3,5, 7], 10))