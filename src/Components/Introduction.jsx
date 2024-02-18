import React, { useState, useEffect } from 'react';

const TypingEffect = ({ messages, setDisplayGameScreen, typingSpeedProp}) => {
    const [typingSpeed, setTypingSpeed] = useState(typingSpeedProp || 200);
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
            //setTypingSpeed(typingSpeedProp * 1.01* 1.01);
        }, typingSpeed);
        return () => clearInterval(timer);
    }, [messages, messageIndex, currentMessage, setDisplayGameScreen]);

    return <div className='type-effect'>{displayedText}</div>;
};

export default TypingEffect;