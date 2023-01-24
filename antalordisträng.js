function räknaOrd(string){//skapar funktionen
    let stringArray = string.split(" ");//splittar upp strängen till ord i en array
    let run = true
    let wordCounter = 0;//skapar ord räknare
    while(run){
        if(stringArray[wordCounter] != null){//kollar om vi har jobbat förbi alla ord i listan
            wordCounter++;//lägger till en på ordräknaren
        } else {
            return wordCounter;//skickar wordCounter
        }
    }
}

console.log(räknaOrd("pang boom"));//loggar svaret