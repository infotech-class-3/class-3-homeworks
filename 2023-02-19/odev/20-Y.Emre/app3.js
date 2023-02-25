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

// const customerId = '234';

// const undeliveredOrders = orders.filter(order => order.customerId === customerId && !order.delivered);

// console.log(undeliveredOrders);


// 2) Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.

// sonuc = orders.map((order) =>{
//     return {
//         ...order,
//         orderPrice:order.items.reduce((total, item)=>{
//         return total + item.price
//     }, 0)
// }
// });
// console.log(sonuc);


// 3) Tüm siparişler teslim edildi mi?

// const sonuc = orders.every((order) => order.delivered);

// console.log(sonuc);


// 4) '123' kimlikli müşteri sipariş verdi mi?

// const sonuc = orders.some((order)=> order.customerId === "123")

// console.log(sonuc);

// 5) 123 kimlikli ürün satıldı mı?

// const sonuc = orders.some (myFunction)

// function myFunction(product){
//     return product.items.some(item => item.productId === "123" );

// }

// console.log(sonuc);
