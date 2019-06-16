import React from 'react'
import debounce from 'lodash/debounce'

interface InputDataHooks {
  inputData: string
  handleInputChange: React.ChangeEventHandler
}

function useInputData(): InputDataHooks {
  const [inputData, setInputData] = React.useState<string>('')

  const delayedSetInputData = debounce(
    (value: string) => setInputData(value),
    300
  )

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    delayedSetInputData(event.target.value)
  }

  return {
    inputData,
    handleInputChange,
  }
}

export default useInputData
