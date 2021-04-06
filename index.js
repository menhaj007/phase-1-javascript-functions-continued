// Your code here
function saturdayFun(value = "roller-skate") {
    return `This Saturday, I want to ${value}!`;
}
function mondayWork(value = "go to the office") {
    return `This Monday, I will ${value}.`
}

function wrapAdjective(vFlair = "*") {
    
    return function(value = "special") {
        return `You are ${vFlair}${value}${vFlair}!`;
    }
}


console.log(wrapAdjective("*")("a dedicated programmer"));