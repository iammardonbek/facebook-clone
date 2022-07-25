import React from "react";
import list from "./List";
import { Avatar, AvatarName, MainLeft, Tab } from "./Style";

export default function Sidebar() {
  return (
    <MainLeft>
      <Tab>
        <Avatar src={list[0].img} alt="rasm" />
        <AvatarName>mardonbek madyorov</AvatarName>
      </Tab>
      <Tab>
        <Avatar
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
          alt="rasm"
        />
        <AvatarName>friends</AvatarName>
      </Tab>
      <Tab>
        <Avatar
          src="	https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png"
          alt="rasm"
        />
        <AvatarName>memories</AvatarName>
      </Tab>
      <Tab>
        <Avatar
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png"
          alt="rasm"
        />
        <AvatarName>saved</AvatarName>
      </Tab>
      <Tab>
        <Avatar
          src="	https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
          alt="rasm"
        />
        <AvatarName>groups</AvatarName>
      </Tab>
      <Tab>
        <Avatar
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"
          alt="rasm"
        />
        <AvatarName>marketplace</AvatarName>
      </Tab>
    </MainLeft>
  );
}
