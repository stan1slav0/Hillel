const products = [
  ['apple', 10],
  ['banana', 8],
  ['mango', 20],
  ['grape', 18],
]

function summerValue(value) {
  return value * 0.8
}

function winterValue(value) {
  return value * 2
}

const getPrice = (products, seasonFunc) => {
  let copiedProducts = [...products]
  let newArr = []
  let allPrice = 0

  if (typeof seasonFunc === 'function')
    newArr = isNewArr(copiedProducts, seasonFunc)
  else newArr = copiedProducts

  for (let i = 0; i < newArr.length; i++) {
    allPrice += newArr[i][1]
  }
  return allPrice
}

function isNewArr(arr, func) {
  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    newArr.push([arr[i][0], func(arr[i][1])])
  }
  return newArr
}

getPrice(products)
