function storBokstav(string){
    let stringArray = string.split("");//splittar angiven text
    let sAp = 0;//array position
    let run = true;
    let counter = 0;//stor bokstavs räknare

    while(run){
        if(stringArray[sAp] != null){
            if(stringArray[sAp] == stringArray[sAp].toUpperCase() && stringArray[sAp] != " "){//om bokstaven i arrayn är lika med samma bkstav fast stor OCH den inte är lika med ett mellanslag
                counter++;//lägger till en på counter
            }
            sAp++;//lägger till en på array positionen
        } else {
            return counter;//skickar resultatet
            run = false;//stänger loopen
        }
    }
}

console.log(storBokstav("Jacob Is Snyg"));