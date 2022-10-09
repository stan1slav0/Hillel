const burgers = {
  hamburger: 10,
  cheeseburger: 15,
  doubleCheese: 5,
}

const potato = {
  small: 10,
  middle: 15,
  big: 20,
}

const sauce = {
  mayonnaise: 3,
  ketchup: 2,
}

const userValue = confirm('Do you want to order burgers?')

if (userValue) {
  let burgerChoice = prompt('Do you want hamburger or cheeseburger?')

  const final = {
    finalBurgers: 'hamburger',
    finalPotato: 'small',
    finalSauce: 'ketchup',
  }

  let finalBurgersPrice = 0,
    finalPotatoPrice = 0,
    finalSaucePrice = 0

  if (burgerChoice !== null && burgerChoice !== '') {
    if (burgerChoice.includes('hamburger')) {
      finalBurgersPrice = burgers.hamburger
      final.finalBurgers = burgerChoice
    } else if (burgerChoice.includes('cheeseburger')) {
      finalBurgersPrice = burgers.cheeseburger
      final.finalBurgers = burgerChoice
      if (burgerChoice.includes('cheeseburger')) {
        let addCheese = confirm('Would you like to add double cheese?')
        if (addCheese) {
          finalBurgersPrice = burgers.cheeseburger + burgers.doubleCheese
        }
      }
    } else if (
      !burgerChoice.includes('hamburger') &&
      !burgerChoice.includes('cheeseburger')
    ) {
      finalBurgersPrice = burgers.hamburger
    }
  } else {
    finalBurgersPrice = burgers.hamburger
  }

  let addPotato = confirm('Would you like potato?', '')

  if (addPotato) {
    let potatoChoice = prompt('Choose potato size: small/middle/big')

    if (potatoChoice) {
      potatoChoice = potatoChoice.replaceAll(` `, ``)
    }

    if (potatoChoice === 'big') {
      finalPotatoPrice = potato.big
      final.finalPotato = potatoChoice
    } else if (potatoChoice === 'middle') {
      finalPotatoPrice = potato.middle
      final.finalPotato = potatoChoice
    } else {
      finalPotatoPrice = potato.small
    }
  }

  let addSauce = confirm('Would you like to add sauce?', '')

  if (addSauce) {
    let sauseChoice = prompt('Choose sauce: ketchup/mayonnaise')

    if (sauseChoice) {
      finalSaucePrice = sauseChoice.replaceAll(` `, ``)
    }

    if (sauseChoice === 'ketchup') {
      finalSaucePrice = sauce.ketchup
      final.finalSauce = sauseChoice
    } else if (sauseChoice === 'mayonnaise') {
      finalSaucePrice = sauce.mayonnaise
      final.finalSauce = sauseChoice
    }
  } else {
    finalBurgersPrice + finalPotatoPrice
  }

  let finalPrice = finalSaucePrice + finalBurgersPrice + finalPotatoPrice

  document.write(`        
       <h2>Your order:</h2>
       <ul>
           <li>Bulka 🍔: ${final.finalBurgers} </li>
        `)

  if (addPotato) {
    document.write(`<li>Potato 🍟: ${final.finalPotato} </li>`)
  }

  if (addSauce) {
    document.write(`<li>Sauce 🧂: ${final.finalSauce} </li>`)
  }

  document.write(` 
            </ul>
            <p>Price: ${finalPrice} UAH</p>
        `)
}
