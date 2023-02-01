function medianOfArray(array){//skapar funktionen
    array.sort(function(x,y){
        return x-y;
    });
    let run = true;
    let iC = 0;
    while(array[iC] != null){
        iC++;
    }
    
    if(iC % 2 == 0){
        let devider = iC/2;
        let pos1 = devider-1;
        let pos2 = devider;
        return (array[pos1]+array[pos2])/2; 
    } else {
        iC = iC/2
        let pos = Math.floor(iC);
        return array[pos];
    }
}

console.log(medianOfArray([18,4,14,6,8,9,9]));