import React from 'react';
import { useMediaQuery } from '@material-ui/core';

function MyComponent() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div>
            {isMobile ? (
                <p>Este es un dispositivo móvil</p>
            ) : (
                <p>Este es un dispositivo de escritorio</p>
            )}
        </div>
    );
}

export default MyComponent;