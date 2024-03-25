/*
Questão 19: Como você pode definir uma função de retorno de chamada 
(callback) em JavaScript?
*/

function print(callback) {  
    callback();
}

function ab() { 
   console.log("callback");
} 

print(ab) 