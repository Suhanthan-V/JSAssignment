"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
var stringInput = prompt('Please enter a string :');
var stringSecInput = prompt('Please enter a string :');
splitstring(stringInput);
var trimStringLength = trimstring(stringInput);
console.log(trimStringLength);
isAnagram(stringInput, stringSecInput);
function splitstring(str) {
    var words = str.split(" ");
    var length = words.length;
    var lastWordLen = words[length - 1].length;
    console.log(words);
    console.log(length);
    console.log(words[length - 1]);
    console.log(lastWordLen);
}
function trimstring(str) {
    var trimmedString = str.trim();
    var words = trimmedString.split(" ");
    var length = words.length;
    var lastWordLen = words[length - 1].length;
    //console.log(trimmedString);
    console.log(words[length - 1]);
    return lastWordLen;
}
function isAnagram(first, second) {
    var replacedString = first.replace(/\s/g, '');
    console.log(replacedString);
    var modifyString = replacedString.toLowerCase();
    var charArray = Array.from(modifyString);
    var sortedInput = charArray.sort();
    console.log(sortedInput);
    var resultString = sortedInput.join('');
    console.log(resultString);
    var replacedSecondString = second.replace(/\s/g, '');
    console.log(replacedSecondString);
    var modifySecString = replacedSecondString.toLowerCase();
    var charSecArray = Array.from(modifySecString);
    var sortedSecInput = charSecArray.sort();
    console.log(sortedSecInput);
    var resultSecString = sortedSecInput.join('');
    console.log(resultSecString);
    return resultString === resultSecString;
}
