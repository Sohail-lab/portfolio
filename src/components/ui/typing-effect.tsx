import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
}

export const TypingEffect: React.FC<TypingEffectProps> = ({
    text,
    className = '',
    speed = 50,
    delay = 0
}) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    // Function to get random typing speed variation
    const getRandomSpeed = () => {
        // Base speed with small random variation
        return speed + Math.random() * 20 - 10;
    };

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, delay * 1000);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        const timeout = setTimeout(() => {
            if (currentIndex < text.length) {
                // Add character with a slight fade-in effect
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            } else {
                setIsComplete(true);
            }
        }, getRandomSpeed());

        return () => clearTimeout(timeout);
    }, [currentIndex, text, speed, isStarted]);

    return (
        <span className={`${className} inline-block`}>
            {displayText.split('').map((char, index) => (
                <span
                    key={index}
                    className="inline-block animate-fade-in"
                    style={{
                        animationDelay: `${index * 0.01}s`,
                        opacity: 0,
                        animation: 'fadeIn 0.1s forwards',
                        whiteSpace: 'pre',
                    }}
                >
                    {char}
                </span>
            ))}
            {!isComplete && <span className="animate-blink">|</span>}
        </span>
    );
}; 