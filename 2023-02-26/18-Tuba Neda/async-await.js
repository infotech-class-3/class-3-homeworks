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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Try again.');
            }   
        }, 3000);    
    })
}    

async function init() {
    await createPost({ title: 'Blog Post Three', text: 'Cool Holiday Destinations' });

    getPosts();    
}

init();