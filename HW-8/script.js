const animals = [
  ['🐭', 'mouse', 'Jerry'],
  ['🐹', 'hamster', 'Biscuit'],
  ['🐰', 'rabbit', 'Bugs'],
  ['🦊', 'fox', 'Mrs. Fox'],
  ['🐻', 'bear', 'Paddington'],
]

const food = [
  ['🍎', 'apple', 10],
  ['🍐', 'pear', 12],
  ['🍊', 'tangerine', 15],
  ['🍋', 'lemon', 5],
  ['🍌', 'banana', 7],
]

function getInfo(title, array) {
  let TRs = []

  for (let i = 0; i < array.length; i++) {
    let TDs = []

    for (let j = 0; j < array[i].length; j++) {
      TDs.push(`<td>${array[i][j]}</td>`)
    }

    TRs.push(`<tr>${TDs.join(``)}</tr>`)
  }

  return `<table>
    <caption>${title}</caption>
    ${TRs.join(``)}
    </table>`
}

document.write(getInfo(`Animals`, animals))
document.write(getInfo(`Food`, food))
