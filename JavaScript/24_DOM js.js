const btn = document.getElementById ("button")
const randomColor = () => {
    let val = "0123456789ABCDEF"
    let cons = "#"
    for (let i = 0; i < 6; i++) {
        // Math.random gives only 0 - 0.99 index
        // Math.floor gives the round figure number
        cons = cons + val [Math.floor (Math.random () * 16)]
    }
    return cons;
}

console.log(randomColor());

function changeRandomColor () {
    document.body.style.backgroundColor = randomColor ()
}

btn.addEventListener ("click", changeRandomColor)