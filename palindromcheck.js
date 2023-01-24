function palindromCheck(string){//skapar funktionen
    let stringArray = string.split("");//skapar en stringarray
    stringArray = stringArray.reverse();//vänder arrayn
    let string2 = stringArray.toString();//skaparen sträng av arrayn och lägger den i string2
    string2 = string2.split(",").join("");//splittar strängen på karaktären "," och sätter ihop den igen med "" istället
    if(string == string2){//kollar om orginalet liknar det vända ordet
        return true;//om det stämmer skicka true
    } else {
        return false;//om det inte är stämmer skicka false
    }
}

console.log(palindromCheck("racecar"));//logga svaret i consolen