const cl = (thing) => {console.log(thing)}
const outlierFinder =  (array) => {
    let newArray = []
    for(let i = 0; i <array.length;i++){
        if(array[i] % 2 === 0){newArray.push(array[i])} //pushes everything that can be divded by two into the new array 
}
    if(newArray.length === 1){return newArray[0]} // if only one number is here it means its the odd one out
    else{
        for(let i = 0;i < array.length;i++){
            if(newArray[i] != array[i]){return array[i]} /* Otherwise this finds where theyre different returns it, undefined doesnt = a number neither  */
                                            }
        }
}
cl(outlierFinder([2, 4, 0, 100, 4, 10, 2602, 11])  + ` is the odd one out`)

cl(outlierFinder([160, 3, 1719, 19, 11, 13, -21])  + ` is the odd one out`)