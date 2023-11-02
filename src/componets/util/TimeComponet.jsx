
// Custom hook to manage selectedIndex
import { useState, useEffect } from 'react';

export function useSelectedIndex() {
  const initialIndex = localStorage.getItem('selectedIndex') || 0;
  const [selectedIndex, setSelectedIndex] = useState(Number(initialIndex));

  const handleMenuItemClick = (event) => {
    const newIndex = event.target.value;
    setSelectedIndex(newIndex);

    // Store the selected index in localStorage
    localStorage.setItem('selectedIndex', newIndex);
  };

  useEffect(() => {
    const storedIndex = localStorage.getItem('selectedIndex');
    if (storedIndex !== null) {
      setSelectedIndex(Number(storedIndex));
    }
  }, []);

  return { selectedIndex, handleMenuItemClick };
}








// import React, { useState } from 'react';
// import TimeBar from './TimeBar'; // Import your TimeBar component

// function TimeComponent() {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   console.log(selectedIndex);
//   const handleMenuItemClick = (event) => {
//     setSelectedIndex(event.target.value);
//   };

//   return (
//     <div>
//       <TimeBar selectedIndex={selectedIndex} onMenuItemClick={handleMenuItemClick} />
//       {/* You pass selectedIndex as a prop to TimeBar */}
//     </div>
//   );
// }

// export default TimeComponent;
