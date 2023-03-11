console.log("HELLO");

const API_URL = "https://jsonplaceholder.typicode.com/users/1";
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

/* async function getPosts() {
  try {
    const respos = await fetch(API_URL);
     const data1 = await respos.json();
     console.log(data1);
   } catch (errr) {
     console.error(errr)
   }
}

 getPosts(); */

// 2 saniye (2000ms) bekleme süresi
setTimeout(() => {
  // Kullanıcının postlarını çekmek için GET isteği gönder
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}, 2000);
