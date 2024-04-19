import React, { useEffect, useState } from "react";
import { useUpdateTimePerSecond } from "../../../features/clocks/clock.features";

// function useUpdateTimePerSecond() {
//   const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date().toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return currentTime;
// }

export function Clock() {
  const currentTime = useUpdateTimePerSecond();

  return (
    <div> 
      <h1>Hi</h1> 
      <h2>현재시간: {currentTime}</h2>
    </div>
  );
}