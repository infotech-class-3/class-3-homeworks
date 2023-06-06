function hesapla(sayi_1, sayi_2, islem) {
    let sonuc;
  
    if (islem === 'topla') {
      sonuc = sayi_1 + sayi_2;
    } else if (islem === 'cikar') {
      sonuc = sayi_1 - sayi_2;
    } else if (islem === 'carp') {
      sonuc = sayi_1 * sayi_2;
    } else if (islem === 'bol') {
      if (sayi_2 !== 0) {
        sonuc = sayi_1 / sayi_2;
      } else {
        sonuc = null; // Sıfıra bölme hatası
      }
    } else {
      sonuc = null; // Desteklenmeyen işlem hatası
    }
  
    return sonuc;
  }
  
  module.exports = {
    hesapla
  };
  