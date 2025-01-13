// console.log("Start")

// setTimeout(function cb(){
//   console.log("HELLO")
// },3000)

// console.log("END")


console.log("Start")

setTimeout(()=>{
  console.log("CallBack")
},5000)


fetch("https://github.com/profile").then(
function fetchResolve(){
    console.log("API RESOLVED")
})


console.log("END")