// CALLBACK FUNCTION


// setTimeout(function abc(){
//     console.log("HELLO");
// }, 0)



// function x(y) {
//     console.log("x")

//     y()
// }

// x(function y() {
//     console.log("y")
// })

function countWrapper() {

    let count = 0;

    document.getElementById("btn").addEventListener("click", function () {
        console.log("Button Click ", ++count)
    })

}

countWrapper()

