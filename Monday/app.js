//We want to play a "Game of 3s". Here's how you play it:
//
//First, you pick a random number. Then, repeatedly do the following:
//
//If the number is divisible by 3, divide it by 3.
//If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
//The game stops when you reach "1".

//function takes number as argument
//write conditions
//log number and action taken

function gameOf3(num) {
  let number = num;

  while (number > 1) {
    if (number % 3 === 0) {
      console.log(number, 0);
      number = number / 3;
    } else if (number % 3 === 1) {
      console.log(number, -1);
      number = number - 1;
      number = number / 3;
    } else {
      console.log(number, +1);
      number = number + 1;
      number = number / 3;
    }
  }

  return number;
}

//gameOf3(12)
console.log(gameOf3(100));
//gameOf3(17)
