
import React, { useEffect, useState } from 'react';

interface CounterProps {
  value: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState<string>('0');
  
  useEffect(() => {
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const isPercentage = value.includes('%');
    const hasPlus = value.includes('+');
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const current = progress * numericValue;
      const formatted = isPercentage ? current.toFixed(2) : Math.floor(current);
      
      setCount(`${formatted}${isPercentage ? '%' : ''}${hasPlus ? '+' : ''}`);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
};

export default Counter;
