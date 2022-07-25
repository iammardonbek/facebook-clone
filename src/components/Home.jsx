import React from "react";
import list from "./List";
import { Feed } from "./Feed";
import { Story } from "./Stories";

import {
  Add,
  AddUp,
  AddDown,
  AddInput,
  Live,
  Photo,
  Feeling,
  AddText,
  Avatar,
  MainMiddle,
  Stories,
} from "./Style";
export default function home() {
  return (
    <>
      <MainMiddle className="animate__animated animate__fadeInUp">
        <Stories>
          {list.map((value) => (
            <Story key={value.id} img={value.img} ism={value.ism} />
          ))}
        </Stories>
        <Add>
          <AddUp>
            <Avatar bigger src={list[0].img} alt="rasm" />
            <AddInput
              type="text"
              placeholder="What's on your mind, Mardonbek?"
            ></AddInput>
          </AddUp>
          <AddDown>
            <Live>
              <i className="fa-solid fa-video"></i>
              <AddText>Live Video</AddText>
            </Live>
            <Photo>
              <i className="fa-solid fa-photo-film"></i>
              <AddText>Photo/Video</AddText>
            </Photo>
            <Feeling>
              <i className="fa-solid fa-face-smile"></i>
              <AddText>Feeling/Activity</AddText>
            </Feeling>
          </AddDown>
        </Add>
        {list.map((value) => {
          return <Feed key={value.id} img={value.img} ism={value.ism} />;
        })}
      </MainMiddle>
    </>
  );
}
