"use client";
import Marquee from "react-fast-marquee";

const Marque = ({ photo }) => {
  return (
    <div className="bg-amber-700 text-white py-2">
      <Marquee>
        New Arrival: {photo.title} |
        Weekly Feature: Modern Geometric Patterns |
        Join the Community & Get Inspired
      </Marquee>
    </div>
  );
};

export default Marque;