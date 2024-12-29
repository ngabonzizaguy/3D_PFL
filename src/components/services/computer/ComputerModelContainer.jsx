import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Suspense } from 'react'
import { ComputerModel } from './ComputerModel'

const ComputerModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment={'night'} intensity={0.5} >
                    <ComputerModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera makeDefault position={[-1, 0, 1.8]} zoom={0.8} />
            </Suspense>
        </Canvas>
    )
}

export default ComputerModelContainer