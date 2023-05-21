const getUser = (userId) => {
    const user = 
        fetch('https://jsonplaceholder.typicode.com/users/'+userId)
        .then(response => response.json())
      
    return user;
}




const getPosts = (userId) => {
    const posts = 
    fetch('https://jsonplaceholder.typicode.com/posts/?userId='+userId)
      .then(response => response.json())
    
    return posts;
}


const islem = (userId) => {

    const user = getUser(userId);
    console.log(user);

    setTimeout(() => {
        const posts = getPosts(userId);
        console.log(posts);

    },3000);
}

islem(2);