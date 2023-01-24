function reverseString(string){//skapar funktionen
    let stringArray = string.split("");//skapar en stringarray
    stringArray = stringArray.reverse();//vänder arrayn
    string = stringArray.toString();//skaparen sträng av arrayn 
    string = string.split(",").join("");//splittar strängen på karaktären "," och sätter ihop den igen med "" istället
    return string;//skickar resultatet
}

console.log(reverseString("babbel"));//loggar resultatet i consolen