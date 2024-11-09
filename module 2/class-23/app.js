function generateBgColor() {
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)
    var body = document.querySelector('body');
    // var hexField = document.querySelector('#hex-code')
    var generatedCode = `#${hexColor}`

    // hexField.innerHTML = generatedCode

    body.style.backgroundColor = generatedCode
    body.style.transition = '0.4s ease-in all' 

}


setInterval(generateBgColor, 1000)

var initialRound = 0;

function roundBox(){
    var box = document.querySelector('.box');
    var hexColor = Math.random().toString(16).slice(2, 8).padEnd(6, 0)

    var round = initialRound += 90;
    box.style.rotate = `${round}deg`
    box.style.backgroundColor = `#${hexColor}`
    box.style.transition = '0.4s ease-in-out all' 



}

setInterval(roundBox, 100)
