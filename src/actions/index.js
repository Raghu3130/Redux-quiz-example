
export const checkAnswer = data => {
  return {
    type: 'CHECK_ANSWER',
    data
  }
}

export const calculateResult = filter => {
  return {
    type: 'CALULATE_RESULT',
  }
}
