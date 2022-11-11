import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks/hooks'
import { easyData } from '../../data/data'
import { setGameOver } from '../../features/gameOverSlice'
import { setDisableThirtySecond, setTwoIdsWrongAnswers } from '../../features/lifebousSlice'
import { drawQuestion, setQuestionNumber } from '../../features/questionsSlice'

export const easyDataCopy = [...easyData]

const GameOver = () => {
    const dispatch = useDispatch()
const {award} = useAppSelector((state) => state.gameOver)

const onPlayAgain = () => {
  dispatch(drawQuestion(easyDataCopy));
  dispatch(setGameOver(false))
  dispatch(setQuestionNumber(1))
  dispatch(setDisableThirtySecond(false))
  dispatch(setTwoIdsWrongAnswers({ids: [], questionId: undefined}))
}

  return (
    <div>
        <h1>GameOver</h1>
        <h2>Your prize: {award}</h2>
       <button onClick={onPlayAgain}>Play Again</button>
    </div>
  )
}

export default GameOver