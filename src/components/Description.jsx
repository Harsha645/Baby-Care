import React from 'react';
import Typed from 'typed.js';

export default function Description() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
  
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['This is a camera-based infant monitoring system that alerts caregivers or parents about a babys resting posture. The babys resting position is analyzed using computer vision and image processing to detect dangerous or uncomfortable positions. This sensor-free baby monitor is more convenient and affordable for parents.'],
        typeSpeed: 10,
        backSpeed: 60,
        // loop:true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return (
      
        <span ref={el} className='text-lg font-semibold text-blue-800' />
      
    );
  }