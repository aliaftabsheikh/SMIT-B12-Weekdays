const cart = ["shoes", "shirts", "pants"];


// CallBack Hell

// let order = api.Order(cart, function(orderId){
//     api.Payment(orderId, function(paymentId){
//         api.Shipping(paymentId, function(trackingId){
//            api.checkDelivery(trackingId, function(deliveryStatus){
//             api.updateWallet(deliveryStatus, function(walletStatus){
//               api.walletStatus(walletStatus, function(status){
//                 console.log(status)
//               })
//             })
//            })
//         })
//     })
// })



// PROMISES

// let order = api.Order(cart)  //orderId

// order.then(function(orderId){
//     api.Payment(orderId) //paymentId
// })

// const user = fetch('https://api.github.com/users/aliaftabsheikh')


// user.then(function (data) {
//     console.log(data)
// })


// let order = api.order()

// order.then(function(orderId){
//   return api.Payment(orderId)
// }).then(function(paymentId){
//   return api.Shipping(paymentId)
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

// order.then((orderId) => api.Payment(orderId))
// .then((paymentId) => api.Shipping(paymentId))
// .then((trackingId) => api.checkDelivery(trackingId))
// .then((deliveryStatus) => api.updateWallet(deliveryStatus))
// .then((walletStatus) => api.walletStatus(walletStatus))
// .then((status) => console.log(status))
// .catch((err) => console.log(err))
