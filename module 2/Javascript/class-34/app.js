// 

function x() {
    var a = 7

    return function y() {
        console.log(a);
    }
}

var z = x()

console.log("Hello");

z()
