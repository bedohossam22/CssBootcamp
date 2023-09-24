import { useEffect } from 'react';
import { gsap, Power1 } from 'gsap';

export default function TimelineAnimation({ setDesignation }) {
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    timeline
    .set('.center h2', { textContent: 'Graphic Designer', opacity: 0 , x: 30})
      .to('.center h2', { duration: 0.6, opacity: 1, ease: Power1.easeInOut, transition: '0.5s opacity' })
      .to('.center h2', { duration: 3, x: -30, ease: Power1.easeInOut })
      .to('.center h2', { duration: 0.6, x: -30, ease: Power1.easeInOut, opacity: 0 })
      .to('.center h2', { textContent: 'Front-end Developer' ,opacity: 0  , delay: 0.4})
      .to('.center h2', { duration: 0.6, opacity: 1, ease: Power1.easeInOut, transition: '0.5s opacity' })
      .to('.center h2', { duration: 3, x: 30, ease: Power1.easeInOut })
      .to('.center h2', {  x: 30, ease: Power1.easeInOut, opacity: 0 })
      .to('.center h2', { textContent: 'Web Developer' ,opacity: 0  , delay: 0.4 , x: 30})
      .to('.center h2', { duration: 0.6, opacity: 1, ease: Power1.easeInOut, transition: '0.5s opacity' })
      .to('.center h2', { duration: 3, x: -30, ease: Power1.easeInOut })
      .to('.center h2', {   ease: Power1.easeInOut, opacity: 0 })
  }, [setDesignation])
      
        
  return null;
}