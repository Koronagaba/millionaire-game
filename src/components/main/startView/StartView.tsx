import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { startTheGame } from "../../../features/startViewSlice";
import { enterUserName } from "../../../features/userNameSlice";
import { setGameOver } from "../../../features/gameOverSlice";
import { setQuestionNumber } from "../../../features/questionsSlice";
import {
  clearProbabilityAnswers,
  setTwoIdsWrongAnswers,
  toggleDisablePublicHelpLifebous,
  toggleDisableThirtySecondLifebous,
} from "../../../features/lifebousSlice";
import { youAreMillionaire } from "../../../features/millionaireSlice";

import "./StartView.css";

const StartView = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((state) => state.userName);

  const startGame = () => {
    dispatch(startTheGame());
    dispatch(setGameOver(false));
    dispatch(setQuestionNumber(1));
    dispatch(toggleDisableThirtySecondLifebous(false));
    dispatch(toggleDisablePublicHelpLifebous(false));
    dispatch(youAreMillionaire(false));
    dispatch(clearProbabilityAnswers());
    dispatch(
      setTwoIdsWrongAnswers({ wrongAnswersIds: [], questionId: undefined })
    );
  };

  return (
    <div className="startView">
      <h1 className="welcome">
        {userName && "Hello"} {userName}
      </h1>
      <label className="enterName btn">
        Enter name:
        <input
          type="text"
          value={userName}
          onChange={(e) =>
            dispatch(enterUserName(e.target.value.toUpperCase()))
          }
        />
      </label>
      <button className="btn" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default StartView;