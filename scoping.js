var genderType = "female"; 
 
 function printGender(){
 
 let color="brown"
 
 if(genderType.startsWith("female")){
 var age=30;
 let color ="pink"
 console.log("She/her favourite colour"+color);
 }else{
 var age=35;
 console.log("He/him:"+color);
 }
 console.log(age);
 }
 
 
 printGender()
 console.log(genderType);