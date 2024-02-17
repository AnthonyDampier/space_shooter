import React, { useState, useEffect } from 'react';

const TypingEffect = ({ messages, setDisplayGameScreen, typingSpeed = 100 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);
    const [currentMessage, setCurrentMessage] = useState(messages[messageIndex]);

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= currentMessage?.length && currentMessage != null) {
                setDisplayedText((prev) => prev + currentMessage.charAt(index));
                index++;
                if (index === currentMessage.length && currentMessage != null) {
                    if (messageIndex !== messages.length){
                        setDisplayedText('');
                        setMessageIndex(messageIndex + 1);
                        setCurrentMessage(messages[messageIndex]);
                    } else {
                        
                    }
                    // if(messageIndex !== messages.length - 1 && messages = null){
                    //     setDisplayedText('');
                    //     return setDisplayGameScreen(true);
                    // }
                }
            } else {
                setDisplayedText('');
                setCurrentMessage(null);
                setDisplayGameScreen(true);
            }
        }, typingSpeed);
        setDisplayedText('');
        return () => clearInterval(timer);
    }, [messages, typingSpeed, messageIndex]);

    return <div>{displayedText}</div>;
};

export default TypingEffect;