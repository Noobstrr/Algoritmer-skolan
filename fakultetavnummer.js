function fakultetAvNummer(num){//skapar funktionen
    let counterVal = 1;//skapar nummerräknare
    let multiply = 1;//skapar gångersumman
    let run = true;//skapar run

    while(run){
        if(counterVal != num){//kollar om nummeräknaren inte är lika med det angivna nummret
            multiply = multiply*counterVal;//multiplicerar sig själv med counterVal
            counterVal++;//lägger till en på nummerräknaren
        } else{
            multiply = multiply*counterVal;//eftersom man inte kan utgå ifrån 0 eftersom allt skulle blivigt 0 då, så måste vi multiplisera en extra gång för att få rätt svar
            return multiply;//skickar tillbaka fakulteringen av nummret
            run = false;//stänger av loopen
        }
    }
}

console.log(fakultetAvNummer(5));//loggar svaret i consolen.