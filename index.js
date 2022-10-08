// Code your solution here
function findMatching(drivers, string) {
    const result = drivers.filter(word => 
        word.toUpperCase() === string.toUpperCase());
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(word => word.slice(0,2) === string.slice(0,2));
    return result;
}
function matchName(drivers, string) {
    const result = drivers.filter(({name}) => name === string);
    return result;

}
