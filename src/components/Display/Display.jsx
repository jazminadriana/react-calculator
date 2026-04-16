import React from 'react';
import './Display.css';

const Display = ({ input }) => (
    <div className='input'>
        {input|| '0'}
    </div>
);

export default Display;