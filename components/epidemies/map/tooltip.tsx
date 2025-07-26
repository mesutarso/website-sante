// @ts-nocheck
'use client';
import { useState, ReactNode } from 'react';



type Props = {
    text: string,
    children: ReactNode
}

const Tooltip = ({ text, children }: Props) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <g
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}
            {showTooltip && (
                <>
                    <text
                        x={children?.props?.cx || children?.props?.x}
                        y={(children?.props?.cy || children?.props?.y) - 20}
                        fill={'#000'}
                        textAnchor="middle"
                        className="tooltip-text"
                        style={{ padding: "12px" }}
                    >
                        {text}
                    </text>
                </>
            )}
        </g>
    );
};

export default Tooltip;