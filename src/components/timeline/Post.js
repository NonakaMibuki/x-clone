import React, { forwardRef, useState } from "react";
import "./Post.css";
import { Avatar, IconButton, ThemeProvider, createTheme } from "@mui/material";
import { ChatBubbleOutline, Favorite, FavoriteBorder, PublicOffOutlined, Repeat, VerifiedUser } from "@mui/icons-material";

const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    if (favorite === false) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#f44336",
      },
    },
  });

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
          <Repeat fontSize="small" />
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
