import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  // const boxRef = useRef ()
  // useGSAP(() => {
  //   gsap.to(boxRef.current, {
  //     rotate: 360,
  //     delay: 1,
  //     duration: 1,
  //   })
  // })


  // const container = useRef()
  // useGSAP(() => {
  //   gsap.from(".box", {
  //     rotate:360,
  //     scale: 0,
  //     duration: 1,
  //     opacity: 0,
  //     delay: 0.5
  //   })
  // }, {scope: container})

  const randomX = gsap.utils.random(-500, 500, 100)
  const rotateX = gsap.utils.random(-500, 500, 100)
  const [xValue, setXValue] = useState(0)
  const [rotate, setRotate] = useState(0)
  const boxRef = useRef()
  useGSAP(()=> {
    gsap.to(boxRef.current, {
      x: xValue,
      duration: 1,
      rotate: rotate
    })
  }, [xValue, rotate])

  return (
    <main>
      {/* <div ref={container} className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="container2">
        <div className="circle"></div>
        <div className="box"></div>
      </div> */}

      <button onClick={() => {
        setXValue(randomX)
        setRotate(rotateX)
      }}>Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  )
}

export default App
