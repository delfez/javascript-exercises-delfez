const leapYears = function(year) {

    // second version (more complicated to understand IMO)
if (year % 4 == 0){
    if (year % 100 == 0 && year % 400 !== 0){
        return false
    }else{
        return true
    }
}else{
    return false
}
}

/* first version without &&
if (year % 400 == 0){
    return true
} else if (year % 100 == 0){
    return false
}else if (year % 4 == 0){
    return true
}else {
    return false
}

};
*/
// Do not edit below this line
module.exports = leapYears;


//Every year that is exactly divisible by four is a leap year, 
//except for years that are exactly divisible by 100, 
//but these centurial years are leap years if they are exactly divisible by 400


//if year is divisible by 4, test if its also divisible by 100. if also divisible by 400