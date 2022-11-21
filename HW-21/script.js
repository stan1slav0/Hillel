const API ='https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json';

const body = $(`<main>`).prependTo(`body`);
const info = $(`<div>`).addClass(`info`).appendTo(body);
const carImage = $(`<img>`).appendTo(info);
const carTitle = $(`<span>`).appendTo(info);
const colorPicker = $(`<div>`).addClass(`colorPicker`).appendTo(body)

const renderTesla = () => {
    $.ajax({
        url: API,
        dataType: "JSON",
    })
    .done(res => {
        carImage.attr({
            alt: `Tesla ${res[0].title}`,
            src: `https://mc-astro.github.io/tesla-roadster-colors/img/${res[0].img}.jpg`
        });

        carTitle.html(res[0].title).css("color", `${res[0].color}`)
        
        renderBtns(res);
    })
    .fail(err => console.log(err))
}

const renderBtns = info =>{
    info.map(item => {
        $(`<button class="btn ${item.img}"></button>`) 
            .css("background-color", `${item.color}`)
            .on(`click`, () => {
                carImage.attr({
                    alt: `${item.title}`,
                    src: `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`
                });
                carTitle.html(`${item.title}`).css("color", `${item.color}`)
            })
            .appendTo(colorPicker)
    })
}

renderTesla();
    