const block = document.querySelector('.block')
const body = document.querySelector('body')

block.style.left = 0
block.style.top = 0

const _step = 10

const showBounce = () => {
  block.innerHTML = 'BOOOOMS'
  block.style.color = 'black'
  setTimeout(() => (block.innerHTML = ''), 2000)
}

const moveLeft = () => {
  if (block.offsetLeft > 0) {
    block.style.left = parseInt(block.style.left) - _step + 'px'
  } else {
    block.style.left = parseInt(block.style.left) + _step * 2 + 'px'
    showBounce()
  }
}

const moveRight = () => {
  if (block.offsetLeft + block.clientWidth < body.clientWidth) {
    block.style.left = parseInt(block.style.left) + _step + `px`
  } else {
    block.style.left = parseInt(block.style.left) - _step * 2 + `px`
    showBounce()
  }
}

const moveTop = () => {
  if (block.offsetTop > 0) {
    block.style.top = parseInt(block.style.top) - _step + `px`
  } else {
    block.style.top = parseInt(block.style.top) + _step * 2 + `px`
    showBounce()
  }
}

const moveBottom = () => {
  if (block.offsetTop + block.clientHeight < body.clientHeight) {
    block.style.top = parseInt(block.style.top) + _step + `px`
  } else {
    block.style.top = parseInt(block.style.top) - _step * 2 + `px`
    showBounce()
  }
}

const jumpUp = () => {
  block.style.top = parseInt(block.style.top) - _step * 2 + `px`
  block.style.transition = `0.2s`

  setTimeout(() => {
    block.style.top = parseInt(block.style.top) + _step * 2 + `px`
  }, 500)
}

const sitDown = () => {
  block.style.width = '125px'
  block.style.height = '60px'

  setTimeout(() => {
    block.style.width = '100px'
    block.style.height = '100px'
  }, 500)
}

const ACTIONS = {
  37: moveLeft,
  39: moveRight,
  38: moveTop,
  40: moveBottom,
  32: jumpUp,
  17: sitDown
}

document.addEventListener('keydown', event => ACTIONS[event.keyCode] && ACTIONS[event.keyCode]())
