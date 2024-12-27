let order = api.Order(cart);

order.then((orderId) => api.Payment(orderId))
    .then((paymentId) => api.Shipping(paymentId))
    .then((trackingId) => api.checkDelivery(trackingId))
    .then((deliveryStatus) => api.updateWallet(deliveryStatus))
    .then((walletStatus) => api.walletStatus(walletStatus))
    .then((status) => console.log(status))
    .catch((err) => console.log(err)); // Properly placed catch block and added missing parameter
