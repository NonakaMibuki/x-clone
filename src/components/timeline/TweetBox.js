import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    const postsCollectionRef = collection(db, "posts");
    addDoc(postsCollectionRef, {
      displayName: "プログラミングチュートリアル",
      username: "xxx",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input placeholder="いまどうしてる？" type="text" onChange={(e) => setTweetMessage(e.target.value)} value={tweetMessage}></input>
        </div>
        <input className="tweetBox__imageInput" placeholder="画像のURLを入力してください" type="text" onChange={(e) => setTweetImage(e.target.value)} value={tweetImage}></input>
        <Button className="tweetBox__tweetButton" type="submit" onClick={sendTweet}>
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
