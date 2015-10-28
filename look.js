var readline = require('readline-sync');

var dictionary = {};
var dictionaryIsRunning = true;

function addNewWordToDictionary(word,definition){
    dictionary[word]=definition;
    console.log("Your word has been added to the dictionary!");
}

function getNewWordAndDefinition() {
    var newWord = readline.question('What word would you like to add?: ');
    var definition = readline.question('What is the definition of ' + newWord + '?: ');
    addNewWordToDictionary(word,definition);
}

function wordLookUp(){
    var word = readline.question('What word do you want to look up?: ');
    var definition = dictionary[word];
    console.log(word + ' means ' + definition);
}

function runUsersChoice(choice){
switch (choice){
    case '1':
        wordLookUp();
        break;// stuff
    case '2':
        getNewWordAndDefinition();//stuff
        break;
    case '3':
        console.log('Thanks for using the dictionary')
        dictionaryIsRunning = false;
        break;
    default:
        console.log('You must choose');
        break;
    }

}
console.log(' *********************************');
console.log(' *   Welcome to the dictionary   *');
console.log(' *********************************');

while(true) {
console.log("What would you like to do? ");
console.log("");
console.log("[1]: Lookup a word");
console.log("[2]: Add a new word");
console.log("[3]: Quit the program (and loose all the words you added!)");
var choice = readline.question('Please type 1, 2, or 3: ');
    runUsersChoice(choice);

}