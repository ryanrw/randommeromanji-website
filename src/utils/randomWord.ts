import React from 'react'
import randomNumber from './randomNumber'

interface RandomWordHooks {
  currentWord: string
  randomWord: Function
}

function useRandomWord(): RandomWordHooks {
  const [currentWord, setCurrentWord] = React.useState<string>('')

  function randomWord(wordList: string[]) {
    const lastItem = wordList.length - 1
    setCurrentWord(wordList[randomNumber(0, lastItem)])
  }

  return {
    currentWord,
    randomWord,
  }
}

export default useRandomWord
