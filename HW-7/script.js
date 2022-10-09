// ['Richard','Of','York','Gave','Battle','In','Vain'];

const hero = ['Ivan']
const native = ['York', 'Of']
const destination = ['Poltava', 'In']

const rainbow = destination.concat(native, hero).reverse()

rainbow.splice(0, 1, `Richard`) // ['Richard', 'Of', 'York', 'In', 'Poltava']
rainbow.splice(3, 0, `Gave`, `Battle`) // ['Richard', 'Of', 'York', `Gave`, `Battle`, 'In', 'Poltava'];
rainbow.splice(-1, 1, `Vain`) // ['Richard', 'Of', 'York', `Gave`, `Battle`, 'In', 'Vain'];

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

document.write(`<div style="display:flex; gap:20px;">`)

for (let i = 0; i < rainbow.length; i++) {
  document.write(`
        <div style='display: flex; flex-direction:column; align-items:center; gap:15px;'>
            <div style="width: 50px; height:50px; border-radius:100%; background-color: ${colors[i]}"></div>
            <span>${rainbow[i]}</span>
        </div>
    `)
}

document.write('</div>')
