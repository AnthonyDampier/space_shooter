import React, { useState, useEffect } from 'react';

const TypingEffect = ({ messages, setDisplayGameScreen, typingSpeed = 300 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);
    const [currentMessage, setCurrentMessage] = useState(messages[messageIndex]);

    useEffect(() => {
        let index = -1;
        const timer = setInterval(() => {
            if (index <= currentMessage?.length && currentMessage != null) {
                if (index === currentMessage.length) {
                    if (messageIndex !== messages.length){
                        setDisplayedText('');
                        setMessageIndex(messageIndex + 1);
                        setCurrentMessage(messages[messageIndex]);
                    }
                }
                setDisplayedText((prev) => prev + currentMessage.charAt(index));
                index++;
            } else {
                setDisplayedText('');
                setCurrentMessage(null);
                setDisplayGameScreen(true);
            }
        }, typingSpeed);
        return () => clearInterval(timer);
    }, [messages, typingSpeed, messageIndex, currentMessage, setDisplayGameScreen]);

    return <div>{displayedText}</div>;
};

export default TypingEffect;