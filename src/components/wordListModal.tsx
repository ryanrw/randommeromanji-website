import React from 'react'
import styled from '@emotion/styled'

interface Modal {
  isShowModal: boolean
}

interface ModalDataAndEvent {
  dataAndEvent: {
    isShowModal: boolean
    handleShowModal: Function
    wordList: string[]
  }
}

const WordListModal = styled.div<Modal>`
  display: ${props => (props.isShowModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  overflow: auto;
  background: rgba(0, 0, 0, 0.4);
`

const ModalContent = styled.div`
  width: 30%;
  background: #fefefe;
  border-radius: 10px;
  margin: 5% auto;
  padding: 10px 30px 20px 30px;
  position: relative;
  text-align: center;

  & > p:first-of-type {
    margin: 30px 0 0;
  }

  & > p {
    margin: 10px 0 0;
  }
`

const CloseButton = styled.div`
  position: absolute;
  right: 15px;
  cursor: pointer;
`

const ModalComponent: React.FC<ModalDataAndEvent> = ({ dataAndEvent }) => {
  const { isShowModal, handleShowModal, wordList } = dataAndEvent

  return (
    <WordListModal isShowModal={isShowModal}>
      <ModalContent>
        <CloseButton onClick={() => handleShowModal()}>&times;</CloseButton>
        <h2>Your word list</h2>
        {wordList.length > 0 ? (
          wordList.map(word => <p key={word}>{word}</p>)
        ) : (
          <p>Word list is empty!</p>
        )}
      </ModalContent>
    </WordListModal>
  )
}

export default ModalComponent
