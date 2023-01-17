import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { apis } from "../apis/apis";
import { commentsActions } from "../redux/reducers/comments";

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function Form() {
  const dispatch = useDispatch();

  const [comment, setComment] = useState({
    profile_url: "https://picsum.photos/id/1/50/50",
    author: "",
    content: "",
    createdAt: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    apis.postComment(comment);
    setTimeout(() => {
      dispatch(commentsActions.getComments());
    }, 200);
  };

  return (
    <FormStyle>
      <form>
        <input
          type="text"
          name="profile_url"
          onChange={handleChange}
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input type="text" name="author" onChange={handleChange} placeholder="작성자" />
        <br />
        <textarea name="content" onChange={handleChange} placeholder="내용" required></textarea>
        <br />
        <input type="text" name="createdAt" onChange={handleChange} placeholder="2020-05-30" required />
        <br />
        <button type="submit" onClick={handleSubmit}>
          등록
        </button>
      </form>
    </FormStyle>
  );
}

export default Form;
