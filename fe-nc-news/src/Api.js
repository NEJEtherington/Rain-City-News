import Axios from "axios";

const url = "https://nick-nc-news.herokuapp.com/api";

export const getArticles = query => {
  return Axios.get(`${url}/articles`, { params: query }).then(
    ({ data: { articles } }) => {
      return articles;
    }
  );
};

export const getTopics = query => {
  return Axios.get(`${url}/topics`, { params: query }).then(
    ({ data: { topics } }) => {
      return topics;
    }
  );
};
