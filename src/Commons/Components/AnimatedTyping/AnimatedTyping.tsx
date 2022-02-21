import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

interface AnimatedTypingProps {
    text: string;
    delay: number;
    className?: string;
    startFromChar?: number;
}

function AnimatedTypingComponent ({...props}: AnimatedTypingProps) {
    const spanRef = useRef(null);
    useEffect(() => {
        if (spanRef.current) {
            const typewriter = new Typewriter(spanRef.current, {
                delay: 100,
            });
            typewriter
                .pauseFor(2500)
                .typeString('Desarrollador <strong>Backend</strong>')
                .pauseFor(300)
                .deleteChars(7)
                .typeString('<strong>FrontEnd</strong>')
                .pauseFor(200)
                .deleteChars(8)
                .typeString('<strong>Mobile</strong>')
                .pauseFor(200)
                .deleteChars(6)
                .typeString('<strong>FullStack</strong> ...')
                .start();
        }
    }, []);
    return <span ref={spanRef} {...props}>Desarrollador</span>;
}

export const AnimatedTyping = React.memo(AnimatedTypingComponent);
