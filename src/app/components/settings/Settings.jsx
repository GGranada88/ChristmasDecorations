import React from "react"

export const Settings = ({ balls, deleteBall, deleteAllBalls }) => {
    return (
        <div>
            <h2 className="bg-slate-400 p-2">Your Configuration</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2">#</th>
                        <th className="py-2">X</th>
                        <th className="py-2">Y</th>
                        <th className="py-2">Color</th>
                        <th className="py-2">Size</th>
                        <th className="py-2">Animated</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {balls.map((ball, index) => (
                        <tr key={index} className="text-center">
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{ball.x}</td>
                            <td className="border px-4 py-2">{ball.y}</td>
                            <td className="border px-4 py-2">
                                <div
                                    style={{
                                        backgroundColor: ball.color,
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        margin: "0 auto",
                                    }}
                                ></div>
                            </td>
                            <td className="border px-4 py-2">{ball.size}</td>
                            <td className="border px-4 py-2">{ball.animated ? "Yes" : "No"}</td>
                            <td className="border px-4 py-2">
                                <button
                                    className="text-red-500"
                                    onClick={() => deleteBall(index)}
                                >
                                    &#x2716;
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {balls.length > 0 && (
                <button
                    className="bg-red-500 text-white p-2 rounded mt-2"
                    onClick={deleteAllBalls}
                >
                    Delete All Balls
                </button>
            )}
        </div>
    )
}