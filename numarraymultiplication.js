function produktAvArray(array){//skapar funktionen 
    let run = true;
    let summa = 0;
    let aP = 0;//skapar array positionen
    let temp = 0;//skapar en temp variabel som används för att kolla om koden körs för första gången. För från början är summan 0 men om man gångar någor med 0 så blir det 0 så då hamnar vi i en oändlig loop. Lösningen på detta är att sätta summan till det första talet och det är det vi använder denna till. 

    while(run){
        if(array[aP] != null){//kollar om vi har gått igenom alla nummer i arrayn
            if(summa == 0 && temp == 0){//kollar om summan är 0 och temp variabeln är 0 så kör kod
                summa = array[aP];//sätter summan till det första värdet
                aP++;//lägger till en på positionen
                temp++;//lägger till en i temp variabeln, vilket förhindrar att den kan sätta summan till ett enda värde i arrayn
            } else {
                summa = summa * array[aP];// gångar gammla summan med nya värdet
                aP++;//lägger till en på positionen
            }  
        } else {
            return summa;//skickar summan
            run = false;//stänger loopen
        }
    }
}

console.log(produktAvArray([3,5,6,8]))