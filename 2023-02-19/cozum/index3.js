const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];


//1. 

listOfOrdersC234NotDelivered = orders.filter(order => order.customerId == '234' && !order.delivered)
// console.log(listOfOrdersC234NotDelivered)

//2.
ordersWithTotalPrice = orders.map(order => {
    return {
        ...order,
        totalPrice: order.items.reduce((acc, item) => acc + item.price, 0)
    }
})

// console.log(ordersWithTotalPrice)

//3. 

isAllOrdersDelivered = orders.every(order => order.delivered)

// console.log(isAllOrdersDelivered)

//4. 

hasCustomer123Order = orders.some(order => order.customerId == '123')
// console.log(hasCustomer123Order)

//5.
hasProduct123Sold = orders.some(order => order.items.some(item => item.productId == '123'))

console.log(hasProduct123Sold)