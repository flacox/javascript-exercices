const repeatString = function(txt,x) {
    if (x == -1){
        return "ERROR"
    }else{
        return txt.repeat(x)
    }
    
}

module.exports = repeatString
