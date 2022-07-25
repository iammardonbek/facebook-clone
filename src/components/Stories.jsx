import React from "react";
import { StoriesChild, StoriesImg, StoriesName, Avatar } from "./Style";

export const Story = (props) => {
  return (
    <StoriesChild>
      <div>
        <StoriesImg src={props.img} alt="rasm" />
      </div>
      <Avatar border src={props.img} alt="rasm" />
      <StoriesName>{props.ism}</StoriesName>
    </StoriesChild>
  );
};
