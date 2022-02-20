import { useState } from "react";

export default function FlashCard({flashCard}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flashcard${isFlipped ? " flip" : ""}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Display front and back side of card */}
      <div className="front-side">{flashCard.word}</div>
      <div className="back-side">{flashCard.wordP}</div>
    </div>
  );
}
