const block = document.querySelector(`.block`)
const body = document.querySelector(`body`)

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomColor = () => {
  let colors = []
  for (let i = 0; i <= 2; i++) {
    colors.push(getRandomIntInclusive(0, 255))
  }

  return `rgb(${colors.join(',')})`
}

setInterval(() => (block.style.backgroundColor = getRandomColor()), 500)

const randomPosition = setInterval(() => {
  block.style.left =
    getRandomIntInclusive(
      body.clientWidth - block.clientWidth,
      block.clientWidth
    ) + `px`
  block.style.top =
    getRandomIntInclusive(
      body.clientHeight - block.clientHeight,
      block.clientHeight
    ) + `px`
}, 1000)
