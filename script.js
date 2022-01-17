const cardBlock = document.querySelector('.cards-block')
const cards = cardBlock.querySelectorAll('.card')
const inp = document.querySelector('#inp')
const info = document.querySelector('.info')
const inpInfo = document.querySelector('.inp-info')
const inpBtn = document.querySelector('.inp-btn')
const thank = document.querySelector('.thank')

cardBlock.style.opacity = '0.2'

inpBtn.addEventListener('click', () => {
    if(isNaN(inp.value)) {
        inpInfo.style = "color: red"
        inpInfo.textContent = "You should enter only Numbers!!!"
    }
    else if(inp.value === "") {
        inpInfo.style = "color: red"
        inpInfo.textContent = "You did not entered anything!!!"
    }
    else if(inp.value === " ") {
        inpInfo.style = "color: red"
        inpInfo.textContent = "You did not entered anything!!!"
    }
    else if(inp.value<300) {
        info.textContent = "Ваши деньги не хватить даже на однин товар!"
    }
    else {
        cardBlock.style.opacity = '1'
        selection()
    }
})

function selection() {
    cards.forEach(elem => elem.addEventListener('click', () => {
        elem.classList.toggle("selected")
        calculatePrice()
    }));
}

function calculatePrice() {
    var priceAll = 0;
    cards.forEach(item => {
        let price = +item.getAttribute('data-price')
        if(item.classList.contains('selected')) {
            priceAll += price;
            thank.style = "opacity:1;"
        }
    })
    if(inp.value >= priceAll) {
        info.textContent = 'Общая сумма:' + priceAll + '$';
        if(priceAll === 0) {
            info.textContent = null
            thank.style = "opacity: 0"
        }

    }
    else {
        balance = (+inp.value) - (+priceAll)
        if(balance<300) {
            info.textContent = "Ваши деньги не достаточны чтобы купить все эти товары"
            thank.style.opacity = "0"
            cards.forEach(elem => {
                elem.classList.remove('selected')
            })
        }
    }
}


inp.addEventListener('click', () => {
    inp.classList.add('isActive')
    if(inp.classList.contains('isActive')) {
        inpBtn.style.opacity = "1"
    }
})


