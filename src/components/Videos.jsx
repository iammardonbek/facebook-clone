import React from "react";
import list from "./List";
import { Feed } from "./Feed";
import { MainMiddle } from "./Style";
export default function videos() {
  return (
    <>
      <MainMiddle className="animate__animated animate__fadeInUp">
        {list.map((value) => {
          return <Feed img={value.img} ism={value.ism} />;
        })}
      </MainMiddle>
    </>
  );
}
