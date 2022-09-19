const vegetables = [
  {
    name: `tomato`,
    icon: `🍅`,
    price: 2.3,
  },
  {
    name: `carrot`,
    icon: `🥕`,
    price: 1.5,
  },
  {
    name: `corn`,
    icon: `🌽`,
    price: 2.78,
    season: true,
  },
]

const fruits = [
  {
    name: `watermelon`,
    icon: `🍉`,
    price: 7.7,
    season: true,
  },
  {
    name: `cherries`,
    icon: `🍒`,
    price: 8.5,
    season: true,
  },
  {
    name: `pineapple`,
    icon: `🍍`,
    price: 9.8,
  },
]

const Product = {
  getPrice() {
    let result = this.season ? this.price * this.seasonKoef : this.price
    return result.toFixed(2)
  },
  getInfo() {
    return `Product: ${this.icon} ${this.name}. Type: ${this.type}. Price: $${this.getPrice()}`
  },
}

const Vegetable = Object.create(Product)
Vegetable.type = 'Vegetable'
Vegetable.seasonKoef = 1.3

const Fruit = Object.create(Product)
Fruit.type = 'Fruit'
Fruit.seasonKoef = 2

const makePrototype = (arr, objectProto) => {
  let newArr = arr.map(item => {
    let newObj = Object.create(objectProto)
    Object.assign(newObj, item)

    return newObj
  })
  return newArr
}

let allVegetables = makePrototype(vegetables, Vegetable)
let allFruits = makePrototype(fruits, Fruit)

const renderList = arr => {
  let li = arr.map(item => `<li>${item.getInfo()}</li>`)

  return `<ul>${li.join(``)}</ul>`
}

document.write(renderList(allVegetables))
document.write(renderList(allFruits))
