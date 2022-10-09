let userValue = confirm('Tell me three most important words 💚')

if (userValue) {
  let finalValue = ``

  for (let i = 1; i <= 3; i++) {
    let word, choose

    do {
      word = prompt(`Enter word #${i}`)
      if (word) word = word.trim().toLowerCase()
    } while (!word || word.match(/\d/))

    do {
      choose = prompt(
        `Choose type of transformation for "${word}" : lowercase | uppercase | capitalize`
      )
      if (choose) choose = choose.trim()
    } while (
      !choose ||
      (choose !== 'lowercase' &&
        choose !== 'uppercase' &&
        choose !== 'capitalize')
    )

    switch (choose) {
      case 'lowercase':
        word = word.toLowerCase()
        break
      case 'uppercase':
        word = word.toUpperCase()
        break
      case 'capitalize':
        word = word.charAt(0).toUpperCase() + word.slice(1)
        break
    }

    finalValue += `${word} `
  }

  console.log(`${finalValue}!`)
}
