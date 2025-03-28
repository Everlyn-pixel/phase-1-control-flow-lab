function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}


console.log(scuberGreetingForFeet(199)); 
console.log(scuberGreetingForFeet(1500)); 
console.log(scuberGreetingForFeet(2200));
console.log(scuberGreetingForFeet(3000)); 

console.log(ternaryCheckCity('NYC')); 
console.log(ternaryCheckCity('LA')); 

console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous')); 
console.log(switchOnCharmFromTip('rude')); 
