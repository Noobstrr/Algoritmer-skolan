function räknaMellanslag(string){//skapar funktionen
    let stringArray = string.split("");//splittar upp strängen till ord i en array
    let run = true
    let sAp = 0;
    let spaceCounter = 0;//skapar ord räknare
    while(run){
        if(stringArray[sAp] != null){//kollar om vi har jobbat förbi alla ord i listan
            if(stringArray[sAp] == " "){
                spaceCounter++;
            }
            sAp++;
        } else {
            return spaceCounter;//skickar wordCounter
        }
    }
}

console.log(räknaMellanslag("pang boom "));//loggar svaret