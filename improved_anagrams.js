//Create Interface for reading data from command line
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

//Import Hashmap package
var HashMap = require('hashmap');

//Check for accept only one argument in command line
if (process.argv.length !== 3) {
    console.log("System requires one argument");
    process.exit(-1);
}

/**Function defination for find anagrams of specific word from dictionary
  *Read data from dictionary.txt file
  *Convert input string to sorted lower case string
  *Generate an Hashmap to store key value pair
  *Get data if it is available in hashmap otherwise set new key value pair

  *@param filename : dictionary file
  *@param input : input for finding anagrams
  *
  *@return: anagrams value
*/
var anagramsFinder = function () {
    //Ask for prompt question
    rl.question("AnargamFinder>", function (answer) {
        //Check for exit or not
        if (answer === 'exit')
            return rl.close();
        else {
            //Find anagrams of passing parameter @param answer
            var filenamearg = process.argv[2];
            const fs = require('fs'),
                filename = filenamearg.toString(),
                encoding = 'utf-8';

            fs.readFile(filename, encoding, function (err, data) {
                if (err) throw err;
                var lines = data.split('\n');
                //Trim whitespace, and convert to lower case and sorted string
                for (var i = 0; i < lines.length; i++) {
                    lines[i] = lines[i].trim().toLowerCase();
                }
                // Getting Input
                var input = answer.toString().trim().toLowerCase().split('').sort().join('');
                let map = new HashMap();
                var words = {};

                //Begin Time for Single word
                var starttimeforsingleword = new Date().getTime();

                // Getting Anagrams
                for (var i = 0; i < lines.length; i++) {
                    var word = lines[i];
                    var key = word.split('').sort().join('');
                    if (key === input)
                        if (!map.get(word))
                            map.set(word,answer);
                }
                //End Time for Single word
                var timeforsingleword = new Date().getTime() - starttimeforsingleword;
                //Print Result
                if (map.size > 1)
                {
                    map.forEach(function (key, value) {
                       // console.log(value);
                    });
                    console.log(map.size + " Anagrams found for " + answer + " in " + timeforsingleword + "ms");
                }      
                else
                    console.log("No Anagrams found for" + answer + " in " + timeforsingleword + "ms");
                anagramsFinder();
            })
        }
    })
}

//Program Start
console.log("Welcome to the Anagram Finder");
console.log("------------------------");

//Function Calling
anagramsFinder();