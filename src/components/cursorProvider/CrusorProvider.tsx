import React, { useEffect, useState } from "react";

const CursorProvider = ({ children }: any) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

    useEffect(() => {
        const moveCursor = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleOver = (e: any) => {
            if (e.target.closest(".hover-glass")) {
                setActive(true);
            }
        };

        const handleOut = (e:any) => {
            if (e.target.closest(".hover-glass")) {
                setActive(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleOver);
        window.addEventListener("mouseout", handleOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleOver);
            window.removeEventListener("mouseout", handleOut);
        };
    }, []);

    return (
        <>
            {/* Custom Cursor */}
            <div
                className={`custom-cursor ${active ? "active" : ""}`}
                style={{
                    top: position.y,
                    left: position.x,
                }}
            />

            {/* Page Content */}
            {children}
        </>
    );
};

export default CursorProvider;