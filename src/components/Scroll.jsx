import React from 'react';
import { ReactLenis } from '@studio-freight/lenis/react'; // Ensure the correct import path

function Scroll({ children }) {
    return (
        <ReactLenis root>
            <div className="lenis-wrapper">{children}</div>
        </ReactLenis>
    );
}

export default Scroll;
