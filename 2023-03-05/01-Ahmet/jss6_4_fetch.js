const getuser = (userid) => {
  const user = fetch(
    "https://jsonplaceholder.typicode.com/users/" + userid
  ).then((response) => response.json());

  return user;
};

const postuser = (userid) => {
  const post = fetch(
    "https://jsonplaceholder.typicode.com/posts/?userId=" + userid
  ).then((response) => response.json());

  return post;
};

const islem = async (userid) => {
  const user = await getuser(userid);
  console.log(user);

  setTimeout(async() => {
    const post = await postuser(userid);
    console.log(post);
  }, 2000);
};

islem(10);
