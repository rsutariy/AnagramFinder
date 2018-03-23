//Create Interface for reading data from command line
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

//Check for accept only one argument in command line
if (process.argv.length !== 3) {
    console.log("System requires one argument");
    process.exit(-1);
}

//Program Start
console.log("Welcome to the Anagram Finder");
console.log("------------------------");

//Begin Time for Dictionary
var starttimeforDictionary = new Date().getTime();
const filenamearg = process.argv[2];
const fs = require('fs'),
    filename = filenamearg.toString(),
    encoding = 'utf-8';
fs.readFile(filename, encoding, function (err, data) {
    if (err) throw err;
});

//Reading time for dictionary
var elapsed = new Date().getTime() - starttimeforDictionary;
console.log("Dictionary loaded in " + elapsed + " ms");



/**Function defination for find anagrams of specific word from dictionary
  *Read data from dictionary.txt file
  *Convert Input to sorted lower case string
  *Convert data of dictionary.txt to sorted lower case 
  *Compare input with data of dictionary
  *If match is found then store it in array of anagrams 

  *@param filename : dictionary file
  *@param input : input for finding anagrams
  *
  *@return: array of anagrams 
*/
var anagramsFinder = function () {
    //Ask for prompt question
    rl.question("AnagramFinder>", function (answer) {
        //Check for exit or not
        if (answer == 'exit')
            return rl.close();
        else {
            //Find anagrams of passing parameter @param answer
            fs.readFile(filename, encoding, function (err, data) {
                if (err) throw err;
                var lines = data.split('\n');
                // trim whitespace, and convert to lower case and sorted string
                for (var i = 0; i < lines.length; i++) {
                    lines[i] = lines[i].trim().toLowerCase();
                }
                // Getting Input
                var input = convertString(answer);

                //Begin Time for SingleWord
                var starttimeforSingleword = new Date().getTime();

                // Getting Anagrams
                var anagrams = [];
                for (var i = 0; i < lines.length; i++) {
                    var word = lines[i];
                    var key = word.split('').sort().join('');
                    if (key === input)
                        anagrams.push(word);
                }
                //End Time for SingleWord
                var timeforsingleword = new Date().getTime() - starttimeforSingleword;

                // Print Result
                if (anagrams.length === 1)
                    console.log("No anagrams found for " + anagrams.pop() + " in " + timeforsingleword + "ms");
                else if (anagrams.length > 1) {
                    console.log(anagrams.length + " Anagrams found for " + answer + " in " + timeforsingleword + "ms")
                    console.log(anagrams.toString());
                }
                anagramsFinder();
            });
        }
    });

}

// Input String - trim whitespace, and convert to lower case and sorted string
function convertString(input) {
    if (!input) {
        console.log("Please enter Input");
        return;
    }
    var inputString = input.toString();
    var sortedString = inputString.trim().toLowerCase();
    return sortedString.split('').sort().join('');
}

//Function Calling
anagramsFinder();



