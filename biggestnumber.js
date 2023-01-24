function biggestNumber(array){//skapar funktionen
    return Math.max.apply(null, array);//kollar vilket som är det största talet och skickar iväg det
}

console.log(biggestNumber([0,10,15,04]));//loggar svaret i consolen