const user = {
    name: '',
    surname: '',
    email: '',
    year: 0
}


let enterName = prompt('Enter your name')

while (!enterName) enterName = prompt('Enter your name')

if (enterName) {

    enterName = enterName.replaceAll(' ', '')
    user.name = enterName

    let enterSurname = prompt('Enter your surname')

    while (!enterSurname) enterSurname = prompt('Enter your surname')

    if (enterSurname) {

        enterSurname = enterSurname.replaceAll(' ', '')
        user.surname = enterSurname

        let enterMail = prompt('Enter your e-mail')

        while (!enterMail || !enterMail.includes(`@`) || enterMail.startsWith(`@`) || enterMail.endsWith(`@`)) {
            enterMail = prompt('Enter your e-mail')
        }

        if (enterMail) {

            enterMail = enterMail.replaceAll(' ', '').toLowerCase()
            user.email = enterMail

            let enterAge = +prompt('Enter your year of birth')

            while (!enterAge) enterAge = +prompt('Enter your year of birth')

            if (enterAge) user.year = enterAge
        }
    }

}

let year = new Date().getFullYear()
let age = year - user.year



document.write(`
	<ul style="list-style: none;">
		<li>Full name: <strong>${user.name} ${user.surname}</strong></li>
		<li>Email: <strong>${user.email}</strong></li>
		<li>Age: <strong>${age}</strong></li>
	</ul>
`);
