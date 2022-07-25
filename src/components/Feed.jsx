import React from "react";
import {
  AvatarName,
  Post,
  PostHeader,
  PostImg,
  PostFooter,
  PostComment,
  PostLikes,
  LikeMe,
  ShareMe,
  CommentMe,
  Avatar,
} from "./Style";
import { useState } from "react";

export function Feed(props) {
  const [like, setLike] = useState(false);
  return (
    <Post>
      <PostHeader>
        <Avatar src={props.img} />
        <AvatarName>{props.ism}</AvatarName>
      </PostHeader>
      <PostImg src={props.img}></PostImg>
      <PostFooter>
        <PostComment>
          {like ? <LikeMe /> : <></>}
          {like ? "Mardonbek Madyorov" : ""}
        </PostComment>
        <PostLikes>
          <div onClick={() => setLike((value) => !value)}>
            <LikeMe
              style={{
                color: like ? "rgb(27, 116, 228)" : "rgb(101, 103, 107)",
              }}
            />
            <p
              style={{
                color: like ? "rgb(27, 116, 228)" : "rgb(101, 103, 107)",
              }}
            >
              like
            </p>
          </div>
          <div>
            <CommentMe />
            <p>comment</p>
          </div>
          <div>
            <ShareMe />
            <p>share</p>
          </div>
        </PostLikes>
      </PostFooter>
    </Post>
  );
}
