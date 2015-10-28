var lyrics = ["This","hit","that","ice","cold","Michelle","Pfeiffer","that","white","gold","This","one","for","them","hood","girls","Them","good","girls","straight","masterpieces","Stylin","whilen","livin","it","up","in","the","city","Got","Chucks","on","with","Saint","Laurent","Got","kiss","myself","Im","so","pretty"]; 

function printLyrics(lyricsArray){

    var music = lyricsArray.join(' ');
    console.log(music);

}
printLyrics(lyrics);

function printLyricsBackwards(lyricsArray){

  lyrics.reverse();
    console.log(lyrics.join(' '));
}
printLyricsBackwards(lyrics);

function printAnyOtherWordLyric(lyricsArray){
    
    for( var i=0; i<lyrics.length; i++){
        console.log(lyricsArray);
            
    }

}
printAnyOtherWordLyric(lyrics);