console.log("Hi");
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

//1
// const customerId = '234';

// const undeliveredOrders = orders.filter(order => !order.delivered && order.customerId === customerId);

// console.log(undeliveredOrders);

// //2
// orders.forEach(order => {
//     let totalPrice = 0;
//     order.items.forEach(item => {
//       totalPrice += item.price;
//     });
//     order.totalPrice = totalPrice;
//   });

  //3

  const undeliveredOrders = orders.filter(order => !order.delivered);
const undeliveredOrderCount = undeliveredOrders.length;

console.log(`Teslim edilmemiş sipariş sayısı: ${undeliveredOrderCount}`);

//4
const customer123Orders = orders.filter(order => order.customerId === '123');
if (customer123Orders.length > 0) {
  console.log("123 kimlikli müşteri sipariş vermiş.");
} else {
  console.log("123 kimlikli müşteri henüz sipariş vermemiş.");
}

//5
let isSold = false;

for (let i = 0; i < orders.length; i++) {
  const items = orders[i].items;
  for (let j = 0; j < items.length; j++) {
    if (items[j].productId === '123') {
      isSold = true;
      break;
    }
  }
  if (isSold) {
    break;
  }
}

if (isSold) {
  console.log("123 kimlikli ürün satıldı.");
} else {
  console.log("123 kimlikli ürün satılmadı.");
}