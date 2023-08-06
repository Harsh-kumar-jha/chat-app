import React, { useState } from "react";
import "../Styles/myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItem from "./ConversationItem";

const SideBar = () => {
  const [conversations, setConversation] = useState([
    {
      name: "Random1",
      lastMessage: "Last Message",
      timeStamp: "14:21:22",
    },
    {
      name: "Random1",
      lastMessage: "Last Message",
      timeStamp: "14:21:22",
    },
    {
      name: "Random1",
      lastMessage: "Testing 123...",
      timeStamp: "14:21:22",
    },
  ]);

  return (
    <div className="sideBar-container">
      <div className="sb-header">
        <div className="">
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className="">
          <IconButton>
            <PersonAddAlt1Icon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" className="search-bar" placeholder="Search" />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation) => {
          return <ConversationItem props={conversation} />;
        })}
      </div>
    </div>
  );
};

export default SideBar;
