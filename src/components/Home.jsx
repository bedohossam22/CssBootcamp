import Particletest from "./Particletest";
import Nav from "./Nav";
import TimelineAnimation from "./gsap";
import { useState } from 'react';
import { useRef } from 'react';

export default function Home() {
  const designationRef = useRef('');

  return (
    <div className="Home">
      <Nav />
      <Particletest />
      <div className="center">
        <h1>Sicko for Web Development</h1>
        <h2 ref={designationRef}></h2>
        <TimelineAnimation setDesignation={(newDesignation) => {
          designationRef.current = newDesignation;
        }} />
      </div>
    </div>
  );
}