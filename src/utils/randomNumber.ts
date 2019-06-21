function randomNumber(min: number, max: number): number {
  const MinNumber = Math.ceil(min)
  const MaxNumber = Math.floor(max)

  return Math.floor(Math.random() * (MaxNumber - MinNumber + 1)) + MinNumber
}

export default randomNumber
