function summaAvArray(array){//skapar funktion
    let summa = 0;//skapar en variabel att lägga summan i
    let run = true;//skapr en run
    let aP = 0;//sätter array positionen till 0

    while(run){
        if(array[aP] != null){//kollar om vi har jobbat förbi alla nummer
            summa = summa + array[aP];//plussar på numret i arrayn vid positionen aP
            aP++;//lägger till en på positionen
        } else {
            return summa;//skickar summan av allt
            run = false;//stänger av loopen
        }
    }
}

console.log(summaAvArray([1,6,7]))//loggar allt i consolen