// ['Richard','Of','York','Gave','Battle','In','Vain'];

const hero = ['Ivan'];
const native = ['York','Of'];
const destination = ['Poltava','In'];

const rainbow = hero.concat(native, destination).reverse();

rainbow.unshift('Richard','Gave','Battle');
rainbow.pop();

[
rainbow[1], 
rainbow[5], 
rainbow[6], 
rainbow[2]
] = [
rainbow[5], 
rainbow[1], 
rainbow[2], 
rainbow[6]
];

[rainbow[5], rainbow[3], rainbow[6], rainbow[4]] = [rainbow[3], rainbow[5], rainbow[4], rainbow[6]];

// Подскажите какой синтаксис будет более правильный ?

rainbow.pop()
rainbow.push('Vain')

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

document.write(`<div style="display:flex; gap:20px;">`)

for(let i = 0; i<rainbow.length; i++) {

    document.write(`
        <div style='display: flex; flex-direction:column; align-items:center; gap:15px;'>
            <div style="width: 50px; height:50px; border-radius:100%; background-color: ${colors[i]}"></div>
            <span>${rainbow[i]}</span>
        </div>
    `)
}

document.write('</div>')









