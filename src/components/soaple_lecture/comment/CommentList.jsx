import React from "react";
import { Comment } from "./Comment";

export function CommentList(props) {
  const name = "호호"
  const comment = "히히히히히히"
  return (
    <div>
      <Comment name={name} comment={comment}/>
    </div>
  )
}