import React, { useContext } from "react";
import { NavContext } from "./Contexts";
import { PhotoContext } from "./Contexts";
import list from "./List";

import {
  Avatar,
  AvatarName,
  CentralNavbar,
  LeftNavbar,
  Navbar,
  RightNavbar,
} from "./Style";

export const NavBar = () => {
  const [state, setState] = useContext(NavContext);
  const [info] = useContext(PhotoContext);

  return (
    <Navbar>
      <LeftNavbar>
        <i className="fa-brands fa-facebook"></i>
        <label id="label" for="input">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input placeholder="Search Facebook" />
      </LeftNavbar>
      <CentralNavbar>
        <div>
          <i
            style={{
              color: state === "1" && "rgb(27, 116, 228)",
              transition: state === "1" && "all,0.5s",
            }}
            onClick={() => setState("1")}
            className="a fa-solid fa-house"
          ></i>
          <span>{info ? info.length : 0}</span>
        </div>
        <div>
          <i
            style={{
              transition: state === "2" && "all,0.5s",
              color: state === "2" && "rgb(27, 116, 228)",
            }}
            onClick={() => setState("2")}
            className="a fa-solid fa-circle-play"
          ></i>
          <span>{info ? info.length : 0}</span>
        </div>
        <i
          style={{
            transition: state === "3" && "all,0.5s",
            color: state === "3" && "rgb(27, 116, 228)",
          }}
          onClick={() => setState("3")}
          className="a fa-solid fa-shop"
        ></i>
        <i
          style={{
            transition: state === "4" && "all,0.5s",
            color: state === "4" && "rgb(27, 116, 228)",
          }}
          onClick={() => setState("4")}
          className="a fa-solid fa-user-group"
        ></i>
      </CentralNavbar>
      <RightNavbar>
        <Avatar src={list[0].img} alt="rasm" />
        <AvatarName>mardonbek</AvatarName>
        <i className="b fa-solid fa-ellipsis"></i>
        <i className="b fa-brands fa-facebook-messenger"></i>
        <i className="b fa-solid fa-bell"></i>
        <i className="b fa-solid fa-caret-down"></i>
      </RightNavbar>
    </Navbar>
  );
};
