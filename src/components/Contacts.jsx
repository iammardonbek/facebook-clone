import React from "react";
import list from "./List";
import {
  Avatar,
  AvatarName,
  Contacts,
  ContactsTitle,
  ContactsIcons,
  Person,
  PersonAvatar,
  PersonOnline,
  MainRight,
} from "./Style";

export default function Contact() {
  return (
    <MainRight>
      <Contacts>
        <ContactsTitle>contacts</ContactsTitle>
        <ContactsIcons>
          <i class="fa-solid fa-magnifying-glass"></i>
        </ContactsIcons>
      </Contacts>
      <Person>
        <PersonAvatar>
          <Avatar src={list[0].img} alt="rasm" />
          <PersonOnline></PersonOnline>
        </PersonAvatar>
        <AvatarName>{list[0].ism}</AvatarName>
      </Person>
      <Person>
        <PersonAvatar>
          <Avatar src={list[1].img} alt="rasm" />
          <PersonOnline></PersonOnline>
        </PersonAvatar>
        <AvatarName>{list[1].ism}</AvatarName>
      </Person>
      <Person>
        <PersonAvatar>
          <Avatar src={list[2].img} alt="rasm" />
          <PersonOnline></PersonOnline>
        </PersonAvatar>
        <AvatarName>{list[2].ism}</AvatarName>
      </Person>
      <Person>
        <PersonAvatar>
          <Avatar src={list[3].img} alt="rasm" />
          <PersonOnline></PersonOnline>
        </PersonAvatar>
        <AvatarName>{list[3].ism}</AvatarName>
      </Person>
      <Person>
        <PersonAvatar>
          <Avatar src={list[4].img} alt="rasm" />
          <PersonOnline></PersonOnline>
        </PersonAvatar>
        <AvatarName>{list[4].ism}</AvatarName>
      </Person>
      <Person>
        <PersonAvatar>
          <Avatar src={list[5].img} alt="rasm" />
          <PersonOnline></PersonOnline>
        </PersonAvatar>
        <AvatarName>{list[5].ism}</AvatarName>
      </Person>
    </MainRight>
  );
}
