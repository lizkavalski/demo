'use strict'


let name = prompt('what is your name?');

function game(name){
  let anwser = prompt('Do you want to play a game '+ name + '?');
  if (anwser.toLowerCase() === 'yes'){
    alert('lets play');
    return anwser
  }
 else if( anwser.toLowerCase() === 'no'){
    alert('You have no choice');
    return anwser

  }
};

function color() {
  let anwser = prompt('What your favorite color')
  if (anwser.toLowerCase() === 'pink'){
    alert('Mine is to');
    return anwser

  }
  else{
    alert('Well mine is pink');
    return anwser
  }
};

//for loop
function pickANumber(){
  for(let i = 0; i<= 3; i++){
    let number = prompt('Pick a number between 1 and 20')
    if(parseInt(number)  === 10){
      return number
      break;
      
    }
    else if( parseInt(number)  >= 10){
      alert('too high');
      return number
    }
    else if (parseInt(number)  <= 10){
      alert('too low');
      return number
    }
    else{
      alert('need to be a number');
      return number
    }
  };
  alert('it is 10')
};

//while loop
function movies(){
  let tries=0
  while(tries < 3){
    let movies = prompt('how many star wars movies are there?')
    if(parseInt(movies)  === 11){
      break;
    }
    else if( parseInt(movies)  >= 11){
      alert('too high');
      tries++;
    }
    else if (parseInt(movies)  <= 11){
      alert('too low');
      tries++;
    }
    else{
      alert('need to be a number');
      tries++;
    }
  };
  alert('it is 11');
}

//do...while loop
function city(){
  let answer =''
  do{ 
    answer=prompt('what city is the best?');
    if(answer.toLowerCase() === 'seattle'){
      alert('you are right');
    }
    else{
      alert('try again(hint:it start with SEA)')
    };
  }
  while(answer.toLowerCase() !== 'seattle');
}

game(name);
color();
pickANumber();
movies();
city()






