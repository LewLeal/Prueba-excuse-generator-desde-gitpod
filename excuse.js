window.onload = function () {
    let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    let randomWhoPosition = Math.floor(Math.random()* who.length);
    let randomWhatPosition = Math.floor(Math.random()* what.length);
    let randomWhenPosition = Math.floor(Math.random()* when.length);
    let randomactionsPosition = Math.floor(Math.random()* action.length);
    
    let randomWho= who[randomWhoPosition];
    let randomWhat= who[randomWhatPosition];
    let randomWhen= who[randomWhenPosition];
    let randomActions= who[randomactionsPosition];
    
    document.getElementById("excuse").innerHTML = randomWho + " " + randomWhat + " " + randomActions + " " + randomWhen + " " ;
  };
  