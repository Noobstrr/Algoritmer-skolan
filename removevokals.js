let vokaler = ["a", "o", "u", "å", "e", "i","y", "ä", "ö"];//skapar en lissta med alla vokaler

function vokalremover(string){//skapar en funktion som tar emot en sträng
    string = string.toLowerCase();//gör strängen till bara små bokstäver
    let stringArray = string.split("");//splittar stringen till en array av bokstäver
    let run = true;//skapar en run variabel
    let vAn = 0;//skapar en räknare för vokaler (vokalArrayNumber)
    let sAn = 0;//skapar en räknare för sringarrayen (stringArrayNumber)

    while(run){
        if(stringArray[sAn] != null){ //kollar om vi har jobbat igenom alla bokstäver i sträng arrayn
            let run2 = true;//skapar och sätter run2 variabeln
            while(run2){
                if(vokaler[vAn] != null){//kollar om vi har jobbat igenom alla vokaler att jämföra med
                    if(stringArray[sAn] == vokaler[vAn]){//kollar om en bokstav i sträng arrayn är lika med en någon vokal
                        delete stringArray[sAn]
                    }
                    vAn++;//lägger till en till vokal räknaren
                } else {
                    vAn = 0;//sätter vokal räknaren till 0 alltså position 1 i arrayn
                    run2 = false;//sätter run2 till false
                }
            }
            sAn++;//lägger till en i string räknaren
        } else {
            run = false;//säter run till false alltså stänger av vokalkollarne
        }
    }
    string = stringArray.join("");
    return string;//skickar tillbaka strängen utan vokaler
}
console.log(vokalremover("jacobärganskaledsen"))//loggar svaret i consolen.