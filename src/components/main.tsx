import React from 'react'
import styled from '@emotion/styled'
import useInputData from '../utils/inputData'
import useSubmitEvent from '../utils/submitData'

const CenterMain = styled.div`
  width: calc(100vw - (100vw - 100%));
  display: flex;
  flex-flow: column;
  align-items: center;
`

const HeadText = styled.h1`
  color: gray;
`

const Input = styled.input`
  width: 200px;
  height: 30px;
  color: grey;
  border-radius: 20px;
  border-color: gray;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;

  &:focus {
    outline: none;
  }
`

const Main: React.FC = () => {
  const { inputData, setInputData, handleInputChange } = useInputData()
  const { wordList, handleButtonSubmit, handleEnterSubmit } = useSubmitEvent({
    inputData,
    setInputData,
  })

  return (
    <CenterMain>
      <HeadText>Enter Romanji!</HeadText>
      <Input
        value={inputData}
        onChange={handleInputChange}
        onKeyUp={handleEnterSubmit}
      />
      <button onClick={() => handleButtonSubmit()}>Add to list</button>
      <div>{wordList}</div>
    </CenterMain>
  )
}

export default Main
