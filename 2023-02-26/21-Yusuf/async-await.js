const isLoggedIn = true;

const loginPromise = () => {
  return new Promise((resolve, reject) => {
    // Simulate a login process with a delay
    setTimeout(() => {
      if (isLoggedIn) {
        resolve({ username: 'John Doe', email: 'test@example.com' });
      } else {
        reject('Login failed');
      }
    }, 3000); // simulate a 3 second delay
  });
};

const searchBookPromise = (bookTitle) => {
  return new Promise((resolve, reject) => {
    // Simulate a search for a book with a delay
    setTimeout(() => {
      const books = [
        { title: 'The Book Title', author: 'Jane Smith', year: 2022 },
        { title: 'Another Book', author: 'John Smith', year: 2021 },
        { title: 'A Third Book', author: 'Jane Doe', year: 2020 },
      ];
      // Look for the book title in books
      const foundBook = books.find((book) => book.title === bookTitle);

      if (foundBook) {
        resolve(foundBook);
      } else {
        reject(`Book '${bookTitle}' not available`);
      }
    }, 2000);
  });
};

const process = async () => {
  await loginPromise()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  await searchBookPromise('Another Book')
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log('Process finished');
};

process();
