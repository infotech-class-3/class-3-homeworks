# odev

## basit bir backend yazilmasi

    - express (npm)
    - body-parser (npm)

### request

    - GET localhost:PORT/islem?sayi_1=5&sayi_2=4&islem=topla
        response: {
            "sonuc": 11,
            "hata": "",
            "istek": "GET istegi"
        }


    - POST localhost:PORT/islem
        body: {
            "num_1": 5,
            "num_2": 4,
            "islem": "carp"
        }
        response: {
            "sonuc": 20,
            "hata": "",
            "istek": "POST istegi"
        }
