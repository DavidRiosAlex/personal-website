import React from 'react';

interface ScreenCommonProps {
    children: JSX.Element;
}

export const ScreenCommon = React.memo(({children}: ScreenCommonProps) => {
    return <div className="w-screen h-screen">{children}</div>
});