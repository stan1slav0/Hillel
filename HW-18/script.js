const getFile = file => {
  return fetch(file).then(response => response.json())
}
Promise.all([getFile(`./data.json`), getFile(`./data_2.json`)])
  .then(data => {
    let allChildren = data.map(item => item.children).join(',')
    console.log(allChildren)
  })
  .catch(err => console.warn(err))
