
const apple = `🍎`,
      applePrice = 10,
      appleCount = 3,
      appleSalePercent = 7;

const appleResultPercent = applePrice / 100 * appleSalePercent;
const appleFinalPrice = applePrice * appleCount - appleResultPercent * appleCount;

const orange = `🍊`,
      orangePrice = 12,
      orangeCount = 2,
      orangeSalePercent = 3;

const orangeResultPercent = orangePrice / 100 * orangeSalePercent;
const orangeFinalPrice = orangePrice * orangeCount - orangeResultPercent * orangeCount;

const kiwi = `🥝`,
      kiwiPrice = 15,
      kiwiCount = 10,
      kiwiCountryPercent = 10;

const kiwiResultPercent = kiwiPrice / 100 * kiwiCountryPercent;
const kiwiFinalPrice = kiwiPrice * kiwiCount + kiwiResultPercent * kiwiCount;


let date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();


let captionString = `Food prices ≠ ${day}.${++month}.${year}`.replace(`≠`,`-`);
    // captionString = captionString.replace(`≠`,`-`);


console.log(captionString);

console.log(`Final price for ${appleCount} ${apple} = ${appleFinalPrice} UAH`);
console.log(`Final price for ${orangeCount} ${orange} = ${orangeFinalPrice} UAH`);
console.log(`Final price for ${kiwiCount} ${kiwi} = ${kiwiFinalPrice} UAH`);
console.log(`Final price for all products = ${appleFinalPrice + orangeFinalPrice + kiwiFinalPrice} UAH`)






const myList = document.querySelectorAll('.list');
let newListItem = document.createElement('li');


myList[0].appendChild(newListItem);

