import React from 'react';

interface TextComponentProps {
    className?: string;
    children?: JSX.Element;
}

function TextComponent ({...props}: TextComponentProps) {
    return <span {...props}></span>;
}

export const Text = React.memo(TextComponent);
