import "./Counter.css";
import { CounterTitle } from "../CounterTitle.tsx/CounterTitle";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../bll/store";
import { incCounter, resetCounter } from "../../bll/counter-reducer";


type CounterType = {
  error: string | null;
  setError: (error: string | null) => void;
};

export const Counter = ({
  error,
  setError,
}: CounterType) => {
 
const counter = useSelector<AppStateType, number>(state=> state.counter.value)
const startValue = useSelector<AppStateType, number>(state=> state.settingsValue.startValue)
const maxValue = useSelector<AppStateType, number>(state=> state.settingsValue.maxValue)
const dispatch = useDispatch()

  const incorrectValue =
    startValue < 0 ||
    maxValue < 0 ||
    maxValue < startValue ||
    (startValue === maxValue && maxValue !== 0);

  if (incorrectValue) {
    setError("Incorrect value!");
  } else {
    setError(null);
  }

  const incrementHandler = () => {
    if (counter < maxValue) {
      dispatch(incCounter())
    }

  };
  const resetHandler = () => {
    dispatch(resetCounter())
  };

  return (
    <div className="counter-container">
      <div className="counter-title ">
        <CounterTitle
          className={
            (counter === maxValue && maxValue !== 0) || error
              ? "counter-title-error"
              : "counter-title-ordirnary"
          }
          title={
            error
              ? error
              : maxValue === 0
              ? "Enter values and press set!"
              : counter
          }
          // title={counter}
        />
      </div>
      <div className="counter-buttons">
        <Button
          onClick={incrementHandler}
          title="inc"
          disabled={counter === maxValue || error !== null}
        />
        <Button
          onClick={resetHandler}
          title="reset"
          disabled={counter === 0 || error !== null}
        />
      </div>
    </div>
  );
};
