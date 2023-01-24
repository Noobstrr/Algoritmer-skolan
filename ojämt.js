function checker(num){//skapar funktionen
    if(num%2 == 0){//kollar om nummret har några decimaler efter att den blir delad på 2
        return "jämn";//om sannt skicka texten "jämn"
    } else {
        return "ojämn"//om falskt skicka texten "ojämn"
    }
}

console.log(checker(68))//logga svaret i consolen

