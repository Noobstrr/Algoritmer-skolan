function medianOfArray(array){
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

console.log(medianOfArray([1,3,4,5,6,8,8,9]));