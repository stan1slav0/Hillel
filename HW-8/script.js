const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];


function getInfo (element, name) {

 document.write(`<div><table>
        <caption>${name} info</caption>
                <tbody>`)

                for(let i = 0; i<element.length; i++){
                    document.write(`
                
                    <tr>
                        <td>${element[i][0]}</td>
                        <td >${element[i][1]}</td>
                        <td >${element[i][2]}</td>
                    </tr>
                    `)
                }
document.write(`</tbody></table></div>`) 
}

getInfo(animals, 'Animals')
getInfo(food, 'Food')

