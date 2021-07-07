import React from 'react'

interface InputDataHooks {
  inputData: string
  setInputData: React.Dispatch<React.SetStateAction<string>>
  handleInputChange: React.ChangeEventHandler
}

function useInputData(): InputDataHooks {
  const [inputData, setInputData] = React.useState<string>('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputData(event.target.value)
  }

  return {
    inputData,
    setInputData,
    handleInputChange,
  }
}

export default useInputData
