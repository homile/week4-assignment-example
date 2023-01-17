import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  //?_page=${1}&_limit=${4}&_order=desc&_sort=id
  getComments: () => api.get(`/comments`),
  getCommentDetail: (commentId) => api.get(`/comments/${commentId}`),
  postComment: (comment) => api.post(`/comments`, comment),
  putComment: (comment, commentId) => api.put(`/comments/${commentId}`, comment),
  deleteComment: (commentId) => api.delete(`commentId/${commentId}`),
};
