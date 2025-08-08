import * as promptSync from 'prompt-sync';
   const prompt = promptSync();
   const stringInput: string = prompt('Please enter a string :');
   const stringSecInput: string = prompt('Please enter a string :');
splitstring(stringInput);
var trimStringLength = trimstring(stringInput);
console.log(trimStringLength);
console.log(isAnagram(stringInput,stringSecInput));

    
function splitstring(str : string){
const words : string[] = str.split(" ");
const length : number = words.length
const lastWordLen : number = words[length-1].length;
   console.log(words);
   console.log(length);
   console.log(words[length-1]);
   console.log(lastWordLen)
}

function trimstring(str : string){
    const trimmedString: string = str.trim();
    const words : string[] = trimmedString.split(" ");
    const length : number = words.length;
    const lastWordLen : number = words[length-1].length;
   //console.log(trimmedString);
    console.log(words[length-1]);
   return lastWordLen;
}

function isAnagram(first : string, second: string){
const replacedString = first.replace(/\s/g,'');
const modifyString = replacedString.toLowerCase();
var charArray : string[] = Array.from(modifyString);
var sortedInput = charArray.sort();
//console.log(sortedInput);
const resultString : string = sortedInput.join('');
//console.log(resultString);

const replacedSecondString = second.replace(/\s/g,'');
//console.log(replacedSecondString); 
const modifySecString = replacedSecondString.toLowerCase();
var charSecArray : string[] = Array.from(modifySecString);
var sortedSecInput = charSecArray.sort();
//console.log(sortedSecInput);
const resultSecString : string = sortedSecInput.join('');
//console.log(resultSecString);
return resultString === resultSecString;
}
