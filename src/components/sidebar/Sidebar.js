import React from "react";
import XIcon from "@mui/icons-material/X";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./Sidebar.css"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <XIcon className="sidebar__xIcon" />

      <SidebarOption text="ホーム" Icon={HomeIcon} active/>
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      <SidebarOption text="通知" Icon={NotificationsNoneIcon} />
      <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />

      <Button className="sidebar__tweet" fullWidth>ツイートする</Button>
      <Link to="logout" className="logout__link">ログアウト</Link>
    </div>
  );
}

export default Sidebar;
