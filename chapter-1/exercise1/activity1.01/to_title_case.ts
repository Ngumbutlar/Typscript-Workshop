//Process string and will capitalize the first letter of each word


function toTitleCase(str: string): string{

   var splits = str.toLowerCase().split(" ");
   for(var i=0; i< splits.length; i++){
      splits[i] = splits[i][0].toUpperCase() + splits[i].slice(1);

   }
   return splits.join(" ");
   

}

console.log(toTitleCase("war AND peace"));
console.log(toTitleCase("Catcher in the Rye"));
console.log(toTitleCase("tO kILL A mOCKINGBIRD"));




 
