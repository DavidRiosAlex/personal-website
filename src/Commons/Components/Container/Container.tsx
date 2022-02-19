import React from 'react';

interface ContainerProps {
    children: Element[];
}

export const Container = React.memo(({children}: ContainerProps) => {
    return <div className="w-f">{children}</div>
})