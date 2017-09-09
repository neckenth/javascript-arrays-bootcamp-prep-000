var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
]
function addElementToBeginningOfArray(a, e) {
    const new_array = [e, ...a]
    return new_array;
}
function destructivelyAddElementToBeginningOfArray(a, e) {
    a.unshift(e)
    return a;
}

function destructivelyAddElementToEndOfArray(a, e) {
    a.push(e)
    return a;
}
