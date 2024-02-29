import React, { useState, useEffect } from "react";

const CountUpAnimation = ({ start, end, duration, isMoney = false }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const increment = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate the percentage progress
      const percentage = Math.min(progress / duration, 1);
    
      // Apply easing to slow down towards the end
      const easedPercentage = 1 - Math.pow(1 - percentage, 2);
      
      // Calculate the current value
      const result = start + easedPercentage * (end - start);
    
      // Update the count state
      isMoney ? setCount(result.toFixed(2)) : setCount(Math.floor(result));
    
      // Continue the animation if not finished
      if (progress < duration) {
        requestAnimationFrame(increment);
      }
    };
    
    requestAnimationFrame(increment);
  }, [start, end, duration]);
  return <span>{count.toLocaleString()}</span>;
};

export default CountUpAnimation;
