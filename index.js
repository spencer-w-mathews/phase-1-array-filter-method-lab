// Code your solution here

/*function findMatching(names, string){

    names.filter(function(name){
        return (name.toUppercase === string.toUppercase);
     
    });
}*/


function findMatching(array, string) {
    const matching = array.filter((driver)=> (driver.toLowerCase() === string.toLowerCase()))
    return(matching)
}

function fuzzyMatch(array, string){
    const startsWith = array.filter((driverName) => driverName.startsWith(string));

    return(startsWith);
}

function matchName(array, string){
    const nameMatch= array.filter((driverName) => (driverName.name===string));
    return(nameMatch)
}