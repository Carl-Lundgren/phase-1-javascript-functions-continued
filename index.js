// Your code here
function saturdayFun(event = "roller-skate") {
    return `This Saturday, I want to ${event}!`;
}

const mondayWork = function(event = 'go to the office') {
    return `This Monday, I will ${event}.`;
}

function wrapAdjective(wrap = '*') {
    return (function(adj = special) {
        return `You are ${wrap}${adj}${wrap}!`;
    }); 
}