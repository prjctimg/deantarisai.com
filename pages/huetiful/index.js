import React from 'react'
import Sketch from 'react-p5'

const Landing = () => {

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(800, 1200)
            .parent(canvasParentRef)
    }

    const draw = p5 => {
        p5.background('blue')
    }

    return (
        <div>
            <Sketch setup={setup} draw={draw} />

        </div>
    )
}

export default Landing