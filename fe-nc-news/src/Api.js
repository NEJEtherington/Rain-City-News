import Axios from "axios";

const url = "https://nick-nc-news.herokuapp.com/api";

export const getArticles = query => {
  return Axios.get(`${url}/articles`, { params: query }).then(
    ({ data: { articles } }) => {
      return articles;
    }
  );
};

export const getSingleArticle = id => {
  return Axios.get(`${url}/articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const getTopics = query => {
  return Axios.get(`${url}/topics`, { params: query }).then(
    ({ data: { topics } }) => {
      return topics;
    }
  );
};

export const getComments = id => {
  return Axios.get(`${url}/articles/${id}/comments`).then(
    ({ data: { comments } }) => {
      return comments;
    }
  );
};

export const getUser = username => {
  return Axios.get(`${url}/users/${username}`).then(({ data: { user } }) => {
    return user;
  });
};

export const patchArticleVotes = (id, direction) => {
  return Axios.patch(`${url}/articles/${id}`, { inc_votes: direction });
};

export const patchCommentVotes = (id, direction) => {
  return Axios.patch(`${url}/comments/${id}`, {
    inc_votes: direction
  });
};

export const postComment = (id, username, body) => {
  console.log(id, username, body);
  return Axios.post(`${url}/articles/${id}/comments`, {
    username: `${username}`,
    body: `${body}`
  });
};
