import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts?_limit=30',
});

const getBooksData = () => instance
  .get()
  .then((responce) => responce.data)
  .catch((err) => {
    if (err.response) {
      return err.response;
    } if (err.request) {
      return err.request;
    }
    return err;
  });

export default getBooksData;
