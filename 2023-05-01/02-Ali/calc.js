function calc(sayi_1, sayi_2, islem) {
  var result = {
    sonuc: 0,
    hata: "",
  };

  if (typeof sayi_1 !== "number" || typeof sayi_2 !== "number") {
    result.hata = "Lütfen sayi giriniz.";
    return result;
  }

  if (islem == "/" && sayi_2 == 0) {
    result.hata = "Bölme isleminde ikinci sayi sifir olamaz.";
    return result;
  }


  switch (islem) {
    case "topla":
      result.sonuc = sayi_1 + sayi_2;
      break;
    case "cikar":
      result.sonuc = sayi_1 - sayi_2;
      break;
    case "bol":
      result.sonuc = sayi_1 / sayi_2;
      break;
    case "carp":
      result.sonuc = sayi_1 * sayi_2;
      break;

    default:
      result.sonuc = 0;
      break;
  }

  return result;
}

module.exports = { calc };
