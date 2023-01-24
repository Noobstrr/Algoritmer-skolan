let array = [1,5,23,76,4,78,6,987,5];//skapar exemepl array

function medelvärde(array){ //skapar funktion som tar emot en array med tal
    let run = true;//skapar run variabel
    let num = 0;//skapar num variabel som räknar antal nummer
    let val = null;// skapar variabeln som alla nummer plussas ihopa i
    while(run){//om vi vill köra koden så måste run vara true
        if(array[num] != null){//om talet i arrayn med talet num, inte är lika med null eller undefined så kör
            let oldVale = val//skapar start värde första gången men lägger den gammla summan sen efter
            val = oldVale + array[num];//sätter nya värdet till det gammla värdet av summan plus ett tall bredvid i arrayn
            num ++;//plussar på med en i radtalet
        } else {
            return val/num;//skickar tillbaka medelvärdet
            run = false;//stänger av loopen
        }
    }
}
console.log(medelvärde(array));//loggar svaret i consollen