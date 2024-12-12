import React from "react";
import '../styles/PetCanvas.css';

// Mood expressions moved outside the component for better performance
const moodExpressions = {
  happy: "😊",
  sad: "😢",
  hungry: "😋",
  excited: "😆",
};

const PetCanvas = ({ color, mood, size = 200 }) => {
  // Helper function to render mouth based on mood
  const renderMouth = () => {
    switch (mood) {
      case "happy":
        return (
          <path
            d="M40 65 Q50 75 60 65"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        );
      case "sad":
        return (
          <path
            d="M40 75 Q50 65 60 75"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        );
      case "hungry":
        return <circle cx="50" cy="70" r="5" fill="black" />;
      case "excited":
        return (
          <path
            d="M40 65 Q50 85 60 65"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="pet-container">
      {/* Hamster Image */}
      <svg
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 150"
      >
        {/* Body */}
        <ellipse cx="50" cy="90" rx="30" ry="40" fill={color} />

        {/* Head */}
        <ellipse cx="50" cy="60" rx="30" ry="40" fill={color} />

        {/* Ears */}
        <circle cx="30" cy="20" r="10" fill={color} />
        <circle cx="70" cy="20" r="10" fill={color} />
        <circle cx="30" cy="20" r="6" fill="pink" />
        <circle cx="70" cy="20" r="6" fill="pink" />

        {/* Eyes */}
        <circle cx="35" cy="45" r="5" fill="black" />
        <circle cx="65" cy="45" r="5" fill="black" />

        {/* Nose */}
        <ellipse cx="50" cy="55" rx="4" ry="3" fill="black" />

        {/* Mouth */}
        {renderMouth()}

        {/* Cheeks (optional based on mood) */}
        {(mood === "happy" || mood === "excited") && (
          <>
            <circle cx="30" cy="55" r="5" fill="pink" />
            <circle cx="70" cy="55" r="5" fill="pink" />
          </>
        )}

        {/* Arms */}
        <ellipse cx="20" cy="100" rx="8" ry="20" fill={color} />
        <ellipse cx="80" cy="100" rx="8" ry="20" fill={color} />

        {/* Legs */}
        <ellipse cx="35" cy="130" rx="10" ry="15" fill={color} />
        <ellipse cx="65" cy="130" rx="10" ry="15" fill={color} />

        {/* Tail (optional for fun) */}
        <circle cx="50" cy="133" r="5" fill={color} />
      </svg>

      {/* Mood Label */}
      <p className="pet-mood-label">{moodExpressions[mood]}</p>
    </div>
  );
};

export default PetCanvas;