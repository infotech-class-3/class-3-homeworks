function calc(sayi_1, sayi_2, islemString, istek) {
  var result = {
    sonuc: 0,
    hata: "",
    istek: "",
  };
  var islem = "";

  if (islemString === "topla") {
    islem = "+";
  } else if (islemString === "cikar") {
    islem = "-";
  } else if (islemString === "bol") {
    islem = "/";
  } else if (islemString === "carp") {
    islem = "*";
  } else {
    result.hata =
      "Gecerli 4 islem isimleri giriniz. Bunlar 'topla','cikar','bol','carp'";
    result.istek = istek;
    return result;
  }

  if (typeof sayi_1 !== "number" || typeof sayi_2 !== "number") {
    result.hata = "Lütfen sayi giriniz.";
    return result;
  }

  if (islem == "/" && sayi_2 == 0) {
    result.hata = "Bölme isleminde ikinci sayi sifir olamaz.";
    return result;
  }

  if (["+", "-", "/", "*"].indexOf(islem) == -1) {
    result.hata = "Hatali islem operatörü.";
    return result;
  }

  switch (islem) {
    case "+":
      result.sonuc = sayi_1 + sayi_2;
      result.istek = istek;
      break;
    case "-":
      result.sonuc = sayi_1 - sayi_2;
      result.istek = istek;
      break;
    case "/":
      result.sonuc = sayi_1 / sayi_2;
      result.istek = istek;
      break;
    case "*":
      result.sonuc = sayi_1 * sayi_2;
      result.istek = istek;
      break;

    default:
      result.sonuc = 0;
      break;
  }

  return result;
}

// const cikti = calc(3, 4, "+");
// console.log("Islem sonucu = ", cikti);

module.exports = calc;
