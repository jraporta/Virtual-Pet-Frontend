import React, { useState, useEffect } from 'react';
import '../styles/PetCanvas.css';

// Mood expressions moved outside the component for better performance
const moodExpressions = {
    happy: "😊",
    sad: "😢",
    hungry: "😋",
    excited: "😆",
};

const PetCanvas = ({ color, mood, size = 200 }) => {
    const [isWaving, setIsWaving] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const [currentMood, setCurrentMood] = useState(mood);

    useEffect(() => {
        // Smoothly transition to the new mood
        const timeout = setTimeout(() => setCurrentMood(mood), 300);
        return () => clearTimeout(timeout);
    }, [mood]);

    const triggerWave = () => {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 1000); // Reset after 1 second
    };

    const triggerBlink = () => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 300); // Reset after 0.3 seconds
    };

    // Helper function to render mouth based on mood
    const renderMouth = () => {
        switch (currentMood) {
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
                        d="M40 70 Q50 60 60 70"
                        stroke="black"
                        strokeWidth="2"
                        fill="none"
                    />
                );
            case "hungry":
                return <circle cx="50" cy="70" r="5" fill="black" />;
            case "excited":
                return (
                    <>
                        <path
                            d="M40 65 Q50 60 60 65 Q50 85 40 65 Z"
                            stroke="black"
                            strokeWidth="1.5"
                            fill="black"
                        />
                        <rect
                            width="8"
                            height="8"
                            x="46"
                            y="63"
                            rx="2"
                            ry="2"
                            fill='white'
                            stroke="black"
                            strokeWidth="1"
                        />
                        <rect
                            width="1"
                            height="8"
                            x="49.5"
                            y="63"
                            fill='black'
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="pet-container">
            {/* Pet Image */}
            <svg
                width={size}
                height={size}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 150"
                className={`pet-svg ${isWaving ? "waving" : ""} ${isBlinking ? "blinking" : ""
                    }`}
            >
                <defs>
                    <filter id="f1" x="0" y="0">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                    </filter>
                    <filter id="f2">
                        <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="2" />
                    </filter>
                </defs>

                {/* Body */}
                <ellipse cx="50" cy="90" rx="30" ry="40" fill={color} />
                <circle cx="50" cy="110" r="20" fill="pink" />

                {/* Head */}
                <ellipse cx="50" cy="55" rx="30" ry="35" fill={color} />

                {/* Ears */}
                <circle cx="30" cy="20" r="10" fill={color} />
                <circle cx="70" cy="20" r="10" fill={color} />
                <circle cx="30" cy="20" r="6" fill="pink" />
                <circle cx="70" cy="20" r="6" fill="pink" />

                {/* Eyes */}
                <circle cx="35" cy="45" r="5" fill="black" className="eye left-eye" />
                <circle cx="65" cy="45" r="5" fill="black" className="eye right-eye" />

                {/* Nose */}
                <ellipse cx="50" cy="55" rx="4" ry="3" fill="black" />

                {/* Mouth */}
                {renderMouth()}

                {/* Cheeks (optional based on mood) */}
                {(mood === "happy" || mood === "excited") && (
                    <>
                        <circle cx="30" cy="55" r="5" fill="pink" filter="url(#f1)" />
                        <circle cx="70" cy="55" r="5" fill="pink" filter="url(#f1)" />
                    </>
                )}

                {/* Arms */}
                <ellipse cx="20" cy="100" rx="8" ry="20" fill={color} className="left-arm" />
                <ellipse cx="80" cy="100" rx="8" ry="20" fill={color} className="right-arm" />

                {/* Legs */}
                <ellipse cx="35" cy="120" rx="10" ry="15" fill={color} filter="url(#f2)" />
                <ellipse cx="65" cy="120" rx="10" ry="15" fill={color} filter="url(#f2)" />

                {/* Tail (optional for fun) */}
                <circle cx="50" cy="133" r="5" fill={color} />
            </svg>

            {/* Mood Label */}
            <p className="pet-mood-label">{moodExpressions[mood]}</p>

            {/* Action Buttons */}
            <button onClick={triggerWave}>Wave</button>
            <button onClick={triggerBlink}>Blink</button>
        </div>
    );
};

export default PetCanvas;