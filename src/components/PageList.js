import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { commentsActions } from "../redux/reducers/comments";

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #ffffff;
  border: 1px solid lightgray;
  ${({ active }) =>
    active &&
    `
        background: gray;
        color: #fff;
  `}
  margin-right: 3px;
  cursor: pointer;
`;

function PageList() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const commentsLength = useSelector((state) => state.comments.commentsLength);

  useEffect(() => {
    dispatch(commentsActions.getComments(page));
  }, [page]);

  const pageArray = [];

  for (let i = 0; i < Math.ceil(commentsLength / 4); i++) {
    pageArray.push(
      <Page key={i + 1} active={i + 1 === page} onClick={() => setPage(i + 1)}>
        {i + 1}
      </Page>
    );
  }

  return <PageListStyle>{pageArray}</PageListStyle>;
}

export default PageList;
