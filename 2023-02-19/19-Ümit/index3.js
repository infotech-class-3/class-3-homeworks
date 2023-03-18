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

// 1) Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.
let custom234 = orders.filter((cust) => cust.customerId === '234');
console.log(custom234);

// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.
orders.forEach(order => {
    order.items.forEach(item => {
      item.amount = 5;
    });
  });
console.log(orders);

// 3) Tüm siparişler teslim edildi mi?
deliver = orders.every((prod) => prod.delivered === 'true');
console.log(deliver);

// 4) '123' kimlikli müşteri sipariş verdi mi?
istCustomer = orders.some((prod) => prod.customerId === '123' );
console.log(istCustomer);

// 5) 123 kimlikli ürün satıldı mı?
const istProduct = orders.some(order => {
    return order.items.some(item => item.productId === '123');
  });
console.log(istProduct);
