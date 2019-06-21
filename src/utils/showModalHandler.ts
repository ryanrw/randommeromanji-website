import React from 'react'

interface ModalHandler {
  isShowModal: boolean
  handleShowModal: Function
}

function useModalHandler(): ModalHandler {
  const [isShowModal, setIsShowModal] = React.useState<boolean>(false)

  function handleShowModal() {
    setIsShowModal(!isShowModal)
  }

  return {
    isShowModal,
    handleShowModal,
  }
}

export default useModalHandler
