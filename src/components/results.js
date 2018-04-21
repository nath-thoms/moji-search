import React from "react";

function Results({ emojisToShow }) {

  let emojiOutput = emojisToShow.map(emoji => {

    return (
      <span className='mojis'>{emoji.symbol}</span>
    )
  })
  return emojiOutput;
}


export default Results;
