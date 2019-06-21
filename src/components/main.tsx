import React from 'react'
import styled from '@emotion/styled'
import {
  useInputData,
  useSubmitEvent,
  useRandomWord,
  useModalHandler,
} from '../utils'
import WordListModal from './wordListModal'

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
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin-top: 20px;
`

const Main: React.FC = () => {
  const { inputData, setInputData, handleInputChange } = useInputData()
  const { wordList, handleButtonSubmit, handleEnterSubmit } = useSubmitEvent({
    inputData,
    setInputData,
  })
  const { currentWord, randomWord } = useRandomWord()
  const { isShowModal, handleShowModal } = useModalHandler()

  return (
    <CenterMain>
      <HeadText>Enter Romanji!</HeadText>
      <Input
        value={inputData}
        onChange={handleInputChange}
        onKeyUp={handleEnterSubmit}
      />
      <ButtonGroup>
        <button onClick={() => handleButtonSubmit()}>Add to list</button>
        {/* TODO: Add all Hiragana at once */}
        <button>test yourself</button>
      </ButtonGroup>
      <ButtonGroup>
        <button onClick={() => handleShowModal()}>See your list</button>
        <button onClick={() => randomWord(wordList)}>Random!</button>
      </ButtonGroup>
      <WordListModal dataAndEvent={{ isShowModal, handleShowModal, wordList }} />
      <div>{currentWord}</div>
    </CenterMain>
  )
}

export default Main
