import { useState } from 'react';

export default function Form({setFlashCard}) {
    const [word, setWord] = useState('')
    const [wordP, setWordP] = useState('')

    function handleSubmit(e){
      // prevent form from submitting
      e.preventDefault();
      // we will update the two input by sending new props to flashcard
      setFlashCard({word, wordP})
      // then we will empty our inputs
      setWord('')
      setWordP('')
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          id="word-input"
          placeholder="کلمه"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <input
          id="persian-equivalent-input"
          placeholder="معادل فارسی"
          value={wordP}
          onChange={(e) => setWordP(e.target.value)}
        />
        <button id="submit-btn">ثبت</button>
      </form>
    )
}
