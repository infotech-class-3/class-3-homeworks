function islem() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { 
            try {
                adi="Arif TEMUR";
                resolve();
            }
            catch(hata) 
            {
                reject(hata);
            }
        
        }, 2000);
    })
}

function print () {
    setTimeout(() => {
        console.log(adi)
    }, 1000);
}

async function calistir () {
    await islem();
    print();
}

calistir();