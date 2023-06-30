import React, { useState } from 'react';

function LikeButton() {
   const [likes, setLikes] = useState(0);
   return (
      <>
      <button onClick={() => setLikes(likes + 1)}>
         {likes} Likes
      </button>
      <input type='checkbox'/>
      <input type='radio' />
      </>
   );
}
export default LikeButton;