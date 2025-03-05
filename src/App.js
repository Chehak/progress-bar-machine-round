import { useEffect, useState } from "react";
import "./styles.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          color: animatedProgress <= 3 ? "black" : "white",
          transform: `translateX(${animatedProgress - 100}%)`,
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const perentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {perentages.map((per) => (
        <ProgressBar value={per} key={per} progress={per} />
      ))}
    </div>
  );
}
