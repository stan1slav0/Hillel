class Burger {
  constructor(name, size) {
    this.name = name
    this.size = size
    this.ingredients = [`cutlet`, `salada`, `tomato`]
  }

  setAdditionalIngredients(...args) {
    this.ingredients.push(...args)
  }
}

class Cheeseburger extends Burger {
  constructor(name, size) {
    super(name, size)
    this.ingredients.push(`cheese`)
  }
}

let Hamburger = new Burger('Hamburger', 'small')
Hamburger.setAdditionalIngredients(`egg`, `onion`)

let myCheeseburger = new Cheeseburger('Cheeseburger', 'small')
myCheeseburger.setAdditionalIngredients(`egg`, `onion`)

console.log(Hamburger)
console.log(myCheeseburger)
