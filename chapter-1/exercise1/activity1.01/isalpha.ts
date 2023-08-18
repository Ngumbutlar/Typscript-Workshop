// Return true if string is only alphabet characters

function isAplpha(str:string): boolean{
    if (str.match(/[a-zA]/g)){
        return true;
    }
    else return false;
}

console.log(isAplpha("War and Peace"));
console.log(isAplpha("Atonement"));
console.log(isAplpha( "1Q84"));