const repeatString =function(string,repetition) {
    let string_appended = ""
    if (repetition<0){
        return "ERROR"}
        else{
    for(i=0; i<repetition; i++){
        string_appended=string_appended.concat(string)
        
    }
    return string_appended
}
    
    }
repeatString("Ansar",3)

// Do not edit below this line
module.exports = repeatString;
