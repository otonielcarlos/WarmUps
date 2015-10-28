////["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P
//", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", 

var firstArray = ['Jon', 'Jacob', 'Jingle', 'Heimer', 'Smith'];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var finalArray = [];

for (var i in firstArray) {
    finalArray.push(firstArray[i]);
    
    for (var j in alphabet) {
        finalArray.push(alphabet[j].toUpperCase);


    }
};

console.log(finalArray);