import React, { useState } from 'react';

interface tweetProps {
  user: string;
  children: string;
  likes?: number;
}

export default function Tweet(props: tweetProps) {
  const [likes, setLikes] = useState(props.likes ?? 0)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  return (
    <div>
      <h1><b>{props.user}</b></h1>
      <h3>{props.children}</h3>
      <h4>Likes {likes ?? 0}</h4>
      <button onClick={handleLike}>Dar Like</button>
    </div>
  );
}