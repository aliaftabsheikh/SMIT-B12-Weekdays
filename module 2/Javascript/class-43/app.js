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


// PROMISES 

// let order = api.Order(cart) 

// order.then(function(orderId){
//     return api.Payment(orderId)
// }).then(function(paymentId){      
//    return api.Shipping(paymentId)
// }).then(function(trackingId){
//     return api.checkDelivery(trackingId)
// }).then(function(deliveryStatus){
//     return api.updateWallet(deliveryStatus)
// }).then(function(walletStatus){
//     return api.walletStatus(walletStatus)
// }).then(function(status){
//     console.log(status)
// }).catch(function(err){
//     console.log(err)
// })


// let order = api.Order(cart) 


// order.then((orderId) => api.Payment(orderId))
// .then((paymentId) => api.Shipping(paymentId))
// .then((trackingId) => api.checkDelivery(trackingId))
// .then((deliveryStatus) => api.updateWallet(deliveryStatus))
// .then((walletStatus) => api.walletStatus(walletStatus))
// .then((status) => console.log(status))
// .catch((err) => console.log(err))

// const github = "https://api.github.com/users/aliaftabsheikh"
// const user = fetch(github)


// user.then(function(data){
//     console.log(data)
// })

const cart = ["shoes", "shirts", "pants"];


const order = createOrder(cart)

console.log(order)

order.then(function(orderId) {
    return orderId
    // alert(`orderID: ${id}`)
})
.then(function(orderId) {
    return proceedPayment(orderId)
}
).then(function (paymentStatus) {
    console.log(paymentStatus)
})
.catch(function (err) {
    // alert(err.message)
    console.log(err)
})


function proceedPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if(orderId){
            resolve("Payment Successful")
        }

        if(!orderId){
            const error = new Error("Payment Failed")
            reject(error)
        }

    })
}


function createOrder(cartItems) {
    // console.log(cartItems)
    const promise = new Promise(function (resolve, reject) {

        if (!validateCart()) {
            const err = new Error("Invalid Cart")
            reject(err.message)
        }

        const orderId = "12345"

        if (orderId) {
            // setTimeout(() => {
            resolve(orderId)
            // },5000)
        }
    })

    return promise;

}


function validateCart() {
    return true
}
