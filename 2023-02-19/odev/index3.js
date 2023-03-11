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


console.log("Index 3 ----------------------------------------")
// 1) Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.
console.log("1. sorunun cevabi----------------------------------------")

const filteredOrders = [...orders].filter((order) => order.customerId === '234' && !order.delivered);

console.log(filteredOrders);


// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.
console.log("2. sorunun cevabi----------------------------------------")

const ordersWithTotalPrice = orders.map(order => ({
    ...order,
    totalPrice: order.items.reduce((acc, item) => acc + item.price, 0)
  }));
  
  console.log(ordersWithTotalPrice);
  

// 3) Tüm siparişler teslim edildi mi?
console.log("3. sorunun cevabi----------------------------------------")

const hasEveryOrderDeliverd = orders.every((order) => order.delivered === 'yes');

console.log(hasEveryOrderDeliverd);

// 4) '123' kimlikli müşteri sipariş verdi mi?
console.log("4. sorunun cevabi----------------------------------------")

const customer123Ordered = orders.some(order => order.customerId === '123');

console.log(customer123Ordered);




// 5) 123 kimlikli ürün satıldı mı?
console.log("5. sorunun cevabi----------------------------------------")

/* const isId123Sold = orders.some(order => order.productId === '123');

console.log(isId123Sold); */

const product123Sold = orders.some(order => order.items.some(item => item.productId === '123'));

console.log(product123Sold);
