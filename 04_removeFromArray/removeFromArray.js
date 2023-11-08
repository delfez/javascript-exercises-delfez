const removeFromArray = function(arr, ...cuts) {
   
    
    for (let cut of cuts){
        let cutindex = arr.indexOf(cut)
        if (cutindex != -1)
        
        {arr.splice(cutindex, 1)}
        
    }
    
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

