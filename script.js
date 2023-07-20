console.log('funguju!');

// PŘESTUPNÝ ROK
// 1. ŘEŠENÍ

const calculateYear = (e) => {
    e.preventDefault()
    const yearElm = document.querySelector('#year')
    let year = Number(yearElm.value)
    const yearResult = document.querySelector('.year__result')

    if (Number.isInteger(year) === true && (year > 0) && String(year).length === 4) {

        if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0) ||
            (year % 4 === 0) && (!(year % 100 === 0))) {
            yearResult.innerHTML = `
                <img class="icon" src="./img/Icon_YES_resized.png" alt="icon-yes" width="30" height="30"/>
                <p class="color color--yes">Rok je přestupný</p>
            `
        } else {
            yearResult.innerHTML = `
                <img class="icon" src="./img/Icon_NO_resized.png" alt="icon-no" width="30" height="30"/>
                <p class="color color--no">Rok není přestupný</p>
            `
        }

    } else {
        yearResult.innerHTML = `
            <img class="icon" src="./img/exclamation_resized.jpg" alt="icon-exclamation" width="291" height="281"/>
            <p class="color color--normal">Chybně zadaný rok</p>
        `
    }
}

const formElm = document.querySelector('#year__form')
formElm.addEventListener('submit', calculateYear)


/*
// 2. ŘEŠENÍ
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    document.querySelector('.prestupnyRok').innerHTML = 'Rok je přestupný'
} else {
    document.querySelector('.prestupnyRok').innerHTML = 'Rok není přestupný'
}
*/



