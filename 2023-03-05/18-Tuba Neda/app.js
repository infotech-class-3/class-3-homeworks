const getUser = (userId) => {
    return fetch("https://jsonplaceholder.typicode.com/users/" + userId).then( //link userlar icin
    (response) => response.json()
    );
  };
  
  const getPosts = (userId) => {
    const posts = fetch(
      "https://jsonplaceholder.typicode.com/posts/?userId=" + userId
    ).then((response) => response.json());
  
    return posts;
  };
  
  const islem = async (userId) => {
    const user = await getUser(userId);
  
    if (!user.id) {
      console.console.error();
      ("Kullanici bulunamadi.S");
      return;
    }
    console.log(user);
  
    setTimeout(async () => {
      const posts = await getPosts(userId);
      console.log(posts);
    }, 2000);
  };
  
  islem(1000000);