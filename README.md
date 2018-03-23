Anagram Finder Programming Task
 - An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema , formed from iceman.
 
 Flow of Task:
  - In each case, the program should accept a single parameter which will be the name of the dictionary file. 
  - The dictionary file consists oa  list of words. Each word is on separate line. 
  - The program should provide a command line prompt where a user can input a word of their choice. 
  - On hitting enter the program should find all anagrams, if any exist, of the word and print them out on the next line as a comma           separated list. If no anagrams are found it should print out “No anagrams found for <word>”.
  - Include in the output timings for loading the dictionary and timings for each anagram set request.
  - The program should continue to prompt for anagrams until “exit” is typed at the prompt.
 
 Created two versions of task
 1. anagrams.js
    How program works?
    - First read file and and convert data in lower case array.
    - Then convert input string to lower case and sorted manner.
    - Then take one word from array(storing it to another variable) and sort it into key.
    - Check that sorted key with input.
    - If it is perferct match than push word to anagrams array.
    - Display anagrams array.
    
 2. improved_anagrams.js
    How program works?
    - First read file and and convert data in lower case array.
    - Then convert input string to lower case and sorted manner.
    - Then take one word from array(storing it to another variable) and sort it into key.
    - Check that sorted key with input.
    - If it is match then store that key and value in map.
    - Whenever need that key then fetch value from map.
    - Display value from map.
