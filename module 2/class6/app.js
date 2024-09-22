// var country = prompt("Enter a country");

// if (country === "Pakistan" || country === "India" || country === "China" || country === "Afghanistan") {
//    alert("Country exist in Asia !")
// }else{
//     alert("Country doesn't exist in Asia !")
// }


// var checkMoney = prompt("If you have enough money?");
// var checkVisa = prompt("if you have country Visa?");
// var checkPassport = prompt("if you have a passport?");


// if (checkMoney == "Yes" && checkVisa == "Yes" && checkPassport == "Yes") {
//     alert("You are ready to Fly")
// } else {
//     alert("Yehin Raho !")
// }


var num = +prompt("Enter a Number");

if(num <= 0){
    alert("Please Enter a greater number")
}else{
    if(num % 3 === 0 && num % 5 === 0){
        alert("Fizz Buzz")
    }else if(num % 5 === 0){
        alert("Buzz")
    }else if(num % 3 === 0){
        alert("Fizz")
    }else{
        alert("Game Over!")
    }
}


