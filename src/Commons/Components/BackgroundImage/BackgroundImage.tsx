import React from 'react';

interface BackgroundImageProps {
    src: string;
    className?: string;
}

function BackgroundImageComponent ({src, className, ...props}: BackgroundImageProps) {
    return <img className={`z-0 w-full h-full object-cover absolute ${className}`} src={src} {...props} />;
}

export const BackgroundImage = React.memo(BackgroundImageComponent);
