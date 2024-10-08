import React, { useEffect, useState } from 'react';

const MouseToggle = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed', // Use fixed to keep it on screen
                left: mousePosition.x - 10, // Center the dot
                top: mousePosition.y - 10, // Center the dot
                width: '20px', // Width of the dot
                height: '20px', // Height of the dot
                borderRadius: '50%', // Make it a circle
                backgroundColor: 'white', // Color of the dot
                pointerEvents: 'none', // Ignore mouse events on the dot
                transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Transition for color and shadow
                boxShadow: '0 0 10px rgba(242, 97, 63, 0.8)', // Box shadow for the dot
                zIndex: 9999 // Ensure it stays on top
                
            }}
        />
    );
};

export default MouseToggle;
