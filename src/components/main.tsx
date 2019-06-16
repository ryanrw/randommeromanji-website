import React from 'react'
import styled from '@emotion/styled'
import useInputData from '../utils/inputData'

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
  const { inputData, handleInputChange } = useInputData()

  return (
    <CenterMain>
      <HeadText>Enter Romanji!</HeadText>
      <Input onChange={handleInputChange} />
      <div>{inputData}</div>
    </CenterMain>
  )
}

export default Main
