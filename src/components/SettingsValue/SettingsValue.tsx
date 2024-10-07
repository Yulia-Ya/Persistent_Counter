import { ChangeEvent } from "react";
import "./SettingValue.css";
type SettingsValueType = {
  title: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className : string
};

export const SettingsValue = ({
  title,
  value,
  onChange,
  className
}: SettingsValueType) => {
  return (
    <div className="counter-settings-container">
      <span className="counter-settings-title">{title}:</span>
      <input
        className={className}
        type="number"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
