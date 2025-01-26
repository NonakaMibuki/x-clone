import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Avatar, IconButton, ThemeProvider, createTheme } from "@mui/material";
import styled from "@emotion/styled";
import { ChatBubbleOutline, Favorite, FavoriteBorder, PublicOffOutlined, Repeat, VerifiedUser } from "@mui/icons-material";
import { db, auth } from "../../firebase";
import { arrayUnion, collection, doc, updateDoc } from "firebase/firestore";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#f44336",
    },
    repeat: {
      main: "#00B16B",
    },
  },
});

const Post = forwardRef(({ displayName, username, verified, text, image, avatar, onRepeat, postId, retweetedBy, retweetedPost }, ref) => {
  const [favorite, setFavorite] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const repeatClick = async () => {
    setRepeat(!repeat); 
  };

  const handleClick = () => {
    setFavorite(!favorite); 
  };

  return (
    <div className="post" ref={ref}>
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />@{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <ThemeProvider theme={theme}>
            <IconButton onClick={() => repeatClick()}>{repeat ? <Repeat color="repeat" /> : <Repeat color="none"/>}</IconButton>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <IconButton onClick={() => handleClick()}>{favorite ? <Favorite color="secondary" /> : <FavoriteBorder />}</IconButton>
          </ThemeProvider>
          <PublicOffOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
