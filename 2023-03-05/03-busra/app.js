// 1 nolu user verisi
const getUser = async () => {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        return data;
      };
      
      getUser().then((user) => {
        console.log(user);
      });
// 2 sn sonra 1 nolu kullanicinin postlari
setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }, 2000);
      
