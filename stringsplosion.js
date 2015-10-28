var word = prompt( 'Type a 4 digit word');
function separate(){

    console.log(word.slice(0,1)+ word.slice(0,2) +word.slice(0,3) +word);
    
}   
separate();
//var firstWord = prompt('Type a word');
//var word = [firstWord];
//
//function stringSplosion(word){
//  var word = [];
//  for(var i = 1; i <= word.length; i++){
//    var string_out = word.substr(0, i);
//    string_array.push(string_out);
//  }
//  return string_array.join('');
//}
//
//
//
//console.log(stringSplosion(word));