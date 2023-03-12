function getUser(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`User ${userId} not found`);
      } else {
        return response.json();
      }
    }
  );
}

function getUserPosts(userId) {
  return fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`User ${userId} has not any posts`);
    } else {
      return response.json();
    }
  });
}

const user = 1;

getUser(user)
  .then((user) => {
    console.log(`User ${user.name} fetched!`);
    setTimeout(() => {
      getUserPosts(user.id).then((posts) => {
        console.log(`User ${user.name} posts:`);
        console.log(posts);
      });
    }, 2000);
  })
  .catch((error) => {
    console.error(`Failed to fetch user: ${error.message}`);
  });
