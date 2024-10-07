import "./CounterSetiings.css";
import { Button } from "../Button/Button";
import { SettingsValue } from "../SettingsValue/SettingsValue";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../bll/store";
import { setMaxValueAc, setStartValueAc } from "../../bll/settingsValue-reducer";
import { changeToStartValue } from "../../bll/counter-reducer";

type CounterSettingsType = {
  error: string | null;
};

export const CounterSettings = ({ error }: CounterSettingsType) => {
  const dispatch = useDispatch();

  const startValue = useSelector<AppStateType, number>((state) => state.settingsValue.startValue);
  const maxValue = useSelector<AppStateType, number>((state) => state.settingsValue.maxValue);

  const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartValueAc(Number(e.currentTarget.value)));
  };
  const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValueAc(Number(e.currentTarget.value)));
  };

  const setHandler = () => {
    dispatch(changeToStartValue(startValue));
  };
  return (
    <div className="counter-container">
      <div className="counter-setting-wrapper">
        <SettingsValue
          title="max value"
          value={maxValue}
          onChange={changeMaxValue}
          className={error === null || maxValue === 0 ? "counter-settings-value" : "counter-settings-value-error"}
        />
        <SettingsValue
          title="start value"
          value={startValue}
          onChange={changeStartValue}
          className={error === null || startValue === 0 ? "counter-settings-value" : "counter-settings-value-error"}
        />
      </div>
      <div className="counter-buttons">
        <Button onClick={setHandler} title="set" />
      </div>
    </div>
  );
};

//disabled={error !== null}
