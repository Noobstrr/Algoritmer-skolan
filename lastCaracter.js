function lastCaracter(string){//skapar funktionen
    let stringArray = string.split("");//splittar stringen till en array
    stringArray = stringArray.reverse();//reversar arrayn för att få den sisa karaktären först
    return stringArray[0];//skickar första karaktären i arrayn (sissta i strängen)
}

console.log(lastCaracter("Jacob luktar got"));//loggar det i consolen