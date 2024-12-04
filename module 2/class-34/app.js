function x(a, b) {
    // var a = 7
    // var b = 8

    return function y() {

        console.log("Y FUN", a);
        console.log("Y FUN", b);



        return function z() {
            console.log("Z FUN", a);
            console.log("Z FUN", b);
        }

    }

 
  
}

var d = x(8, 7)

console.log("OUTER", d);

var e = d()

e()
