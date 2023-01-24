function räknaOrd(string, word){
    let stringArray = string.split(" ");//splittar första stringen till en array av ord
    let run = true;
    let sAp = 0;//skapar position för string array
    let counter = 0;//skapar counter 

    while(run){
        if(stringArray[sAp] != null){//kollar om vi har jobbat igenom att ord
            if(word == stringArray[sAp]){//kollar om det angivna ordet likar något i string arrayn
                counter++; //lägger till en på counter 
            }
            sAp++;//lägger till en på position
        } else {
            return counter;//skickar iväg resultatet
            run = false;//stänger av loopen
        }
    }
}

console.log(räknaOrd("hejsan svejsan rackabajsare hejsan", "hejsan"));//loggar svaret