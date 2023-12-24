import { useState, useEffect } from 'react';
import './MouseTrail.css'; // Assuming you have a CSS file for your styles

const MouseTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailerType, setTrailerType] = useState('');
  const [isInteracting, setIsInteracting] = useState(false);

  const animateTrailer = (e) => {
    const x = e.clientX - trailer.offsetWidth / 2;
    const y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${isInteracting ? 3 : 1})`,
    };

    trailer.animate(keyframes, {
      duration: 800,
      fill: 'forwards',
    });
  };

  const getTrailerClass = (type) => {
    switch (type) {
      case 'video':
        return 'fa-solid fa-play';
      default:
        return 'ri-arrow-right-up-line';
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const interactable = e.target.closest('.interactable');
      const interacting = interactable !== null;

      animateTrailer(e);

      setTrailerType(interacting ? interactable.dataset.type : '');
      setIsInteracting(interacting);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isInteracting]);

  return (
    <>
      <div
        id="trailer"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
        className={`trailer ${isInteracting ? 'interacting' : ''}`}
        data-type={trailerType}
      >
        <i id="trailer-icon" className={`${getTrailerClass(trailerType)}`}></i>
      </div>

      {/* Your interactable elements */}
    </>
  );
};

export default MouseTrail;