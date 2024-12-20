"use client"
import React, { useState, useEffect } from "react"

const Control = ({ addBall }) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [color, setColor] = useState("#FF0000")
    const [size, setSize] = useState("Select size")

    const handleSubmit = (e) => {
        e.preventDefault()
        addBall({ x, y, animated, color, size })
    }

    return (
        <div>
            <h2 className="bg-slate-400 p-2">Add Lights</h2>
            <form className="grid grid-cols-2 gap-2 p-2" onSubmit={handleSubmit}>
                <label htmlFor="x">x</label>
                <input type="number" id="x" name="x" value={x} onChange={(e) => setX(e.target.value)} />
                <label htmlFor="y">y</label>
                <input type="number" id="y" name="y" value={y} onChange={(e) => setY(e.target.value)} />
                <label htmlFor="animated">animated</label>
                <input type="checkbox" id="animated" name="animated" checked={animated} onChange={(e) => setAnimated(e.target.checked)} />
                <label htmlFor="color">color</label>
                <input type="color" id="color" name="color" value={color} onChange={(e) => setColor(e.target.value)} />
                <label htmlFor="size">size</label>
                <select id="size" name="size" value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="Select size">Select size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <input className="bg-blue-100 rounded-lg p-2 hover:bg-blue-400 cursor-pointer" type="submit" value="Add Lights" />
            </form>
        </div>
    )
}

export default Control