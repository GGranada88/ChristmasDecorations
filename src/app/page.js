"use client"
import React, { useState } from "react"
import Control from "./components/control/Control"
import Tree from "./components/tree/Tree"
import { Settings } from "./components/settings/Settings"

const App = () => {
    const [balls, setBalls] = useState([])

    const addBall = (ball) => {
        setBalls([...balls, ball])
    }

    const deleteBall = (index) => {
        setBalls(balls.filter((_, i) => i !== index))
    }

    const deleteAllBalls = () => {
        setBalls([])
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <Tree balls={balls} />
            <Control addBall={addBall} />
            <Settings balls={balls} deleteBall={deleteBall} deleteAllBalls={deleteAllBalls} />
        </div>
    )
}

export default App