import { stopTheGame } from "../../features/startViewSlice";
import { enterUserName } from "../../features/userNameSlice";
import { useAppDispatch } from "../../hooks/hooks";

const QuitGame = () => {
  const dispatch = useAppDispatch();

  const quitGame = () => {
    dispatch(enterUserName(""));
    dispatch(stopTheGame());
  };

  return (
    <button className="btn" onClick={quitGame}>
      QuitGame
    </button>
  );
};

export default QuitGame;
