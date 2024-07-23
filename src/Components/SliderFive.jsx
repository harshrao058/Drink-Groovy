import React from 'react';
import slide5 from '../../public/slide5.jpg';

const SliderFive = () => {
  return (
    <div className="h-screen w-full flex items-center justify-end bg-gradient-to-b from-[#F8D148] to-[#FDCACF] relative">
      <div className="relative h-full w-auto">
        <img src={slide5} alt="" className="h-full rounded-xl relative z-10" />
        <div className="absolute inset-0 rounded-xl pointer-events-none bg-transparent" style={{
          background: `
            radial-gradient(circle at top left, transparent 25%, #DC5E6A 26%),
            radial-gradient(circle at top right, transparent 25%, #DC5E6A 26%),
            radial-gradient(circle at bottom left, transparent 25%, #DC5E6A 26%),
            radial-gradient(circle at bottom right, transparent 25%, #DC5E6A 26%)
          `
        }}></div>
      </div>
    </div>
  );
};

export default SliderFive;
