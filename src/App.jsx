import React, { useContext } from "react";
import "./index.css";
import "animate.css";
import home from "./components/Home";
import videos from "./components/Videos";
import marketplace from "./components/Marketplace";
import Contact from "./components/Contacts";
import Sidebar from "./components/Side";
import { LoginContext } from "./components/Contexts";
import { Login } from "./components/Login";
import { NavBar } from "./components/Navbar";
import { MainBody } from "./components/Style";
import { NavContext } from "./components/Contexts";

export default function App() {
  const [login] = useContext(LoginContext);
  const [state] = useContext(NavContext);

  if (login === false) {
    return <Login />;
  } else {
    return (
      <div>
        <NavBar />
        <MainBody>
          <Sidebar />
          {state === "1" && home()}
          {state === "2" && videos()}
          {state === "3" && marketplace()}
          <Contact />
        </MainBody>
      </div>
    );
  }
}
