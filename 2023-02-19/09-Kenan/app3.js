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


//1. Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.

teslimEdilmeyen234IdliMusterininSiparisListesi = orders.filter(siparis => siparis.customerId == '234' && !siparis.delivered)
console.log("1. Teslim edilmeyen 234 ID'li müşteri için siparişlerin bir listesini alın.:", teslimEdilmeyen234IdliMusterininSiparisListesi);


//2. Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.

siparisEdilenUrunlerinToplamFiyati = orders.map(siparis => {
    return {
        ...siparis,
        toplamFiyat: siparis.items.reduce((toplam, urun) => toplam + urun.price, 0)
    }
})
console.log("2. Sipariş edilen ürünlerin toplam fiyatı ile her siparişte yeni bir özellik oluşturun.:", siparisEdilenUrunlerinToplamFiyati);


//3. Tüm siparişler teslim edildi mi?

tumSiparislerTeslimEdildiMi = orders.every(siparis => siparis.delivered)
console.log("3. Tüm siparişler teslim edildi mi?:", tumSiparislerTeslimEdildiMi);

//4. '123' kimlikli müşteri sipariş verdi mi?

musteriId123SiparisVerdiMi = orders.some(siparis=> siparis.customerId == '123')
console.log("4. '123' kimlikli müşteri sipariş verdi mi?:", musteriId123SiparisVerdiMi);

//5.123 kimlikli ürün satıldı mı?

urunId123SatildiMi = orders.some(siparis => siparis.items.some(urun => urun.productId == '123'))
console.log("5. 123 kimlikli ürün satıldı mı?:", urunId123SatildiMi );