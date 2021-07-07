import React from 'react'

interface UserInputEvent {
  inputData: string
  setInputData: React.Dispatch<React.SetStateAction<string>>
}

interface SubmitEvent {
  wordList: string[]
  handleButtonSubmit: Function
  handleEnterSubmit: React.KeyboardEventHandler
}

function useSubmitEvent(userInputEvent: UserInputEvent): SubmitEvent {
  const { inputData, setInputData } = userInputEvent
  const [wordList, addWordToList] = React.useState<string[]>([])

  function handleButtonSubmit() {
    addWordToList([...wordList, inputData])
    setInputData('')
  }

  function handleEnterSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      addWordToList([...wordList, inputData])
      setInputData('')
    }
  }

  return {
    wordList,
    handleButtonSubmit,
    handleEnterSubmit,
  }
}

export default useSubmitEvent
