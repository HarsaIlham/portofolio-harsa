import React, { useEffect, useRef } from "react"

const AnimatedBackground = () => {
	const blobRefs = useRef([])
	const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
	]

	useEffect(() => {
  let animationId
  let time = 0

  const animate = () => {
    time += 0.002 

    blobRefs.current.forEach((blob, index) => {
      if (!blob) return

      const x = Math.sin(time + index) * 60
      const y = Math.cos(time + index * 1.2) * 40

      blob.style.transform = `translate(${x}px, ${y}px)`
    })

    animationId = requestAnimationFrame(animate)
  }

  animate()

  return () => cancelAnimationFrame(animationId)
}, [])

	return (
<div className="fixed inset-0">
  <div className="absolute inset-0">
    <div
      ref={(ref) => (blobRefs.current[0] = ref)}
      className="absolute top-0 -left-10 w-[500px] h-[500px] 
      bg-[#1E293B] rounded-full blur-[140px] opacity-40"
    ></div>

    <div
      ref={(ref) => (blobRefs.current[1] = ref)}
      className="absolute top-0 -right-10 w-[500px] h-[500px] 
      bg-[#0D9488] rounded-full blur-[160px] opacity-20 hidden sm:block"
    ></div>

    <div
      ref={(ref) => (blobRefs.current[2] = ref)}
      className="absolute -bottom-20 left-10 w-[500px] h-[500px] 
      bg-[#0F172A] rounded-full blur-[160px] opacity-50"
    ></div>

    <div
      ref={(ref) => (blobRefs.current[3] = ref)}
      className="absolute -bottom-20 right-10 w-[500px] h-[500px] 
      bg-[#334155] rounded-full blur-[160px] opacity-30 hidden sm:block"
    ></div>
  </div>

  <div className="absolute inset-0 
    bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),
         linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] 
    bg-[size:32px_32px]">
  </div>
</div>
	)
}

export default AnimatedBackground

