'use client'
import React, { useState, useEffect } from "react";

const CurrentDate: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="font-sans tracking-widest text-xs text-[#868794]">
      {`${monthNames[currentDate.getMonth()]} ${getOrdinal(currentDate.getDate())}`}
    </div>
  );
};

export default CurrentDate;
