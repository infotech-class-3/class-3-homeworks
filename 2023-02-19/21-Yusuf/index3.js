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

// #1 - not delivered orders for customer with 234 id
notDelivered234 = orders.filter(order => order.customerId = '234' && !order.delivered);
console.log(notDelivered234);

// #2 - Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.
const ordersWithTotalPrice = orders.map(order => {
    const totalPrice = order.items.reduce((acc, item) => acc + item.price, 0);
    return {
      ...order,
      totalPrice
    };
  });
  console.log(ordersWithTotalPrice);

// #3 - do all the orders delivered?
allOrders = orders.every(order => order.delivered == true);
console.log(allOrders);

// #4 - does customer '123' ordered?
customerId123 = orders.some(order => order.customerId == '123');
console.log(customerId123);

// #5 - is product with 123 id  being ordered?
productId123 = orders.some(order => order.items.some(item => item.productId == '123'));
console.log(productId123);