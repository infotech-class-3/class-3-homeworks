const getUser = (userId) => {
    const user = fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then(response => response.json());
      return user;
      
};

const getPosts = (userId) => {
    const posts = fetch('https://jsonplaceholder.typicode.com/posts/?userId=' + userId)
      .then(response => response.json());
      return posts;
      
};

const islem = async (userId) => {
    const user = await getUser(userId)
    console.log(user)

    setTimeout(async () => {
        const posts = await getPosts(userId)
        console.log(posts);
    },2000);
};

islem(1);


//console.log(getPosts(5));