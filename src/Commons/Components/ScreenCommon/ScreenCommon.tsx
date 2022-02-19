import React from 'react';

interface ScreenCommonProps {
    children: JSX.Element;
}

function ScreenCommonComponent ({children}: ScreenCommonProps) {
    return <div className="w-screen h-screen">{children}</div>;
}

export const ScreenCommon = React.memo(ScreenCommonComponent);