import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
    accept: "application/json,",
  },
});

export const apis = {
  getComments: () => api.get(`/comments`),
  getPagenation: (page) => api.get(`/comments?_page=${page}&_limit=4&_order=desc&_sort=id`),
  getCommentDetail: (commentId) => api.get(`/comments/${commentId}`),
  postComment: (comment) => api.post(`/comments`, comment),
  putComment: (comment, commentId) => api.put(`/comments/${commentId}`, comment),
  deleteComment: (commentId) => api.delete(`commentId/${commentId}`),
};
