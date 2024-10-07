import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter/Counter";

import { CounterSettings } from "./components/CounterSettings/CounterSettings";

function App() {
  // const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  // const [counter, setCounter] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="App">
      <CounterSettings
        error={error}
      />
      <Counter
   
        error={error}
        setError={setError}
      />
    </div>
  );
}

export default App;
