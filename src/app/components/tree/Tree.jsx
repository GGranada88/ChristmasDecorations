import React from "react"

const Tree = ({ balls }) => {
    const treeWidth = 300;
    const treeHeight = 400;

    const isWithinTree = (x, y) => {
        // Define the boundaries of the tree (example values, adjust as needed)
        const treeBoundaries = [
            { x: 150, y: 0, width: 0, height: 50 },
            { x: 100, y: 50, width: 100, height: 50 },
            { x: 50, y: 100, width: 200, height: 100 },
            { x: 0, y: 200, width: 300, height: 200 },
        ];

        return treeBoundaries.some(boundary =>
            x >= boundary.x &&
            x <= boundary.x + boundary.width &&
            y >= boundary.y &&
            y <= boundary.y + boundary.height
        );
    };

    return (
        <div className="tree">
            {balls.map((ball, index) => {
                const x = Math.min(Math.max(ball.x, 0), treeWidth - 30); // Adjusted to fit within tree width
                const y = Math.min(Math.max(ball.y, 0), treeHeight - 30); // Adjusted to fit within tree height

                if (!isWithinTree(x, y)) return null;

                return (
                    <div
                        key={index}
                        className={`ball ${ball.animated ? "animated" : ""}`}
                        style={{
                            left: `${x}px`,
                            top: `${y}px`,
                            backgroundColor: ball.color,
                            width: ball.size === "small" ? "10px" : ball.size === "medium" ? "20px" : "30px",
                            height: ball.size === "small" ? "10px" : ball.size === "medium" ? "20px" : "30px",
                        }}
                    ></div>
                );
            })}
        </div>
    );
}

export default Tree;