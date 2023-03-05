
const posts = [
    { title: 'Blog Post One', text: 'My New School'},
    { title: 'Blog Post Two', text: 'One Crazy Saturday'}
];

function getPosts() {
    setTimeout(() => {
        posts.forEach((item) => {
            console.log(item)            
        })
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 3000);
}

//getPosts();

createPost({ title:'Blog Post Three', text:'Cool Holiday Destinations'}, getPosts);



