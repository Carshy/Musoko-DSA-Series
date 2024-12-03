# list in python is a data structure or rather a variable that is used to hold mutable data. what i mean is that it can hold different types of data for instance a string, a number, a float, or even a boolean

# have a list of words, I want you to filter out the short words and then convert the longer words to uppercase

def wordsCon(words):
  results = [word.upper() for word in words if len(word) > 2 ]
  return results
print(wordsCon["apple", "banana", "mango", "is", "he", "person"])
