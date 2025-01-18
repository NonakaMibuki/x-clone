import React from "react";
import "./Widget.css";
import { Search } from "@mui/icons-material";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterTweetEmbed, TwitterVideoEmbed, TwitterOnAirButton } from "react-twitter-embed";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__serchIcon" />
        <input placeholder="キーワード検索" type="text" />
      </div>
      <div className="widgets__container">
        <h2>いまどうしてる？</h2>
        <TwitterTweetEmbed tweetId={"1844613994709217467"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 400 }} />
        <TwitterShareButton url={"https://facebook.com/elonmusk"} options={{ text: "#reactjs is awesome"}} />
      </div>
    </div>
  );
}

export default Widget;
