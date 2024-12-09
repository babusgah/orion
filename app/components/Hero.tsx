'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, Center } from '@react-three/drei'

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} enablePan={false} />
          <Center>
            <Text3D
              font="/fonts/Roboto_Regular.json"
              size={3}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              ORION
              <meshStandardMaterial color="#4FD1C5" emissive="#4FD1C5" emissiveIntensity={0.5} />
            </Text3D>
          </Center>
        </Canvas>
      </div>
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-300">Orion</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">The Future of Roblox Serverside Scripting</p>
        <a
          href="#get-script"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

export default Hero

