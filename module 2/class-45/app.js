// CALLBACK FUNCTION


// const cart = ["shoes", "shirts", "pants"];

// let order = api.Order(cart, function (orderId) {
//     api.Payment(orderId, function (paymentId) {
//         api.Shipping(paymentId, function () {
//             api.checkDelivery(trackingId, function (deliveryStatus) {
//                 api.updateWallet(deliveryStatus, function (walletStatus) {
//                     api.walletStatus(walletStatus, function (status) {
//                         console.log(status)
//                     })
//                 })
//             })
//         })
//     })
// })



// const order = api.Order(cart)

// {order : orderId }

// order.then((orderId)=>{
//    return api.Payment(orderId)
// })
// .then((paymentId)=>{
//     return api.Shipping(paymentId)
// })
// .then((trackingId)=>{
//     return api.checkDelivery(trackingId)
// })
// .then((deliveryStatus)=>{
//     return api.updateWallet(deliveryStatus)
// })
// .then((walletStatus)=>{
//     return api.walletStatus(walletStatus)
// })
// .then((status)=>{
//     console.log(status)
// })


// order.then((orderId)=> api.Payment(orderId))
// .then((paymentId)=> api.Shipping(paymentId))
// .then((trackingId)=> api.checkDelivery(trackingId))
// .then((deliveryStatus)=> api.updateWallet(deliveryStatus))
// .then((walletStatus)=> api.walletStatus(walletStatus))
// .then((status)=> console.log(status))


// const github = "https://api.github.com/users/aliaftabsheikh"

// const user = fetch(github)

// user.then((data)=>{
//     return data.json()
// }).then((res)=>{
//     console.log(res)
// })

// const cart = ["shoes", "shirts", "pants"];

// const order = createOrder(cart)

// // console.log(order)

// order.then((orderId) => {
//        return orderId
// }).then((order_Id) => {
//     return proceedPayment(order_Id)
// }).then((paymentStatus) => {
//     console.log(paymentStatus) 
// }).catch((err) => {
//     console.log(err)
// })

// function createOrder(cartItems) {
//     // console.log(cartItems)
//     const promise = new Promise(function (resolve, reject) {

//         if (!validateCart()) {
//             const err = new Error("Invalid Cart")
//             reject(err.message)
//         }

//         const orderId = "12345"

//         if (orderId) {
//             // setTimeout(() => {
//             resolve(orderId)
//             // },5000)
//         }
//     })

//     return promise;

// }




// function proceedPayment(orderId) {
//     return new Promise(function (resolve, reject) {
//         if(orderId){
//             resolve("Payment Successful")
//         }

//         if(!orderId){
//             const error = new Error("Payment Failed")
//             reject(error)
//         }

//     })
// }



// function validateCart() {
//     return true
// }



// ASYNC AWAIT 



// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Hello World From P")
//     }, 10000)
// })


// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Hello World From  P1")
//     }, 5000)
// })


// function helloWorld(){
//     // const promise = p

//     p.then((res)=>{
//         console.log(res)
//     })

//     console.log("Hello World")
// }

// helloWorld()


// async function sayHelloWorld(){
//     const data = await p   // Javascript wait here to resolve promise
//     console.log(data)

//     const dataOne = await p1
//     console.log(dataOne)
// }

// sayHelloWorld()

// async function callName(){
//     return "Ali"
// }

// console.log(callName())




async function fetchData(){
    const user = fetch("https://api.github.com/users/aliaftabsheikh");

    const data = await user;
    const res = await data.json();

    return res;
  

}

const res = fetchData();
console.log(res)
