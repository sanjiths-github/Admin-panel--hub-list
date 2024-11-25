import React, { useState, useEffect } from "react";
import "./Loading.css";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 300);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-bar">
        <div
          className="loading-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="loading-text">{progress}%</p>
    </div>
  );
};

export default Loading;
