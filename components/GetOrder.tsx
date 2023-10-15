'use client'

import { useState } from 'react';
import Confetti from 'react-dom-confetti';

export default function GetOrder(): React.ReactElement {
  const [isRunning, setIsRunning] = useState(false);

  const newOrder = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 2000);
  }

  return (
    <div>
      <button
        onClick={newOrder}
        className="bg-green-800 text-white text-xl font-semibold px-7 py-5 rounded-2xl hover:opacity-90 hover:scale-110 transition-all h-fit"
      >
        Get Order
      </button>
      <Confetti active={isRunning} />
    </div>
  )
}