const getUser = (userId) => {
    return fetch('https://jsonplaceholder.typicode.com/users/'+userId)
    .then(response => response.json())
    .then(json => console.log(json))
}

const getPost= (userId) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/?userId='+userId)
    .then(response => response.json())
    .then(json => console.log(json))
}

const islem = async(userId) => {
    const user = await getUser(userId)
    console.log(user)

    setTimeout(async() => {
       const post = await getPost(userId) 
       console.log(post)
    }, 2000);
}
islem(5)