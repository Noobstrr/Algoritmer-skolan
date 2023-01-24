function firstWord(string){//skapar funktion
    stringArray = string.split(" ");//splittar strängen vid mellanslag
    return stringArray[0];//tar första ordet i stringarray
}

console.log(firstWord("babbel kabbel knappel"))//loggar svaret i consolen
