import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'

import styles from './ProgressBar.module.scss'

const ProgressBar = ({
  precent,
  urlImg
}: {
  precent: number,
  urlImg: string
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useLayoutEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      if (!ctx) return

      const xCenter = -40
      const yCenter = 40

      const rainbow = ctx.createConicGradient(0, xCenter, yCenter)
      rainbow.addColorStop(0.01, 'black')
      rainbow.addColorStop(0.01, '#42FF00')
      rainbow.addColorStop(0.3, '#FFC700')
      rainbow.addColorStop(0.6, '#FF7900')
      rainbow.addColorStop(0.99, '#F51B1B')
      rainbow.addColorStop(0.99, 'black')
      
      ctx.beginPath();
      ctx.lineWidth = 17
      ctx.strokeStyle = rainbow
      ctx.rotate(Math.PI / (-2))
      ctx.arc(xCenter, yCenter, 30, 0, (Math.PI * 2) * ((precent / 100)+0.01));
      ctx.stroke();

      ctx.beginPath()
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#1E1E1E'
      ctx.arc(xCenter, yCenter, 20, 0, (Math.PI * 2)-0.1)
      ctx.arc(xCenter, yCenter, 40, 0, (Math.PI * 2)-0.1)
      ctx.stroke()
    }
  }, [precent])

  return (
    <div className={styles.progressBar}>
      <Image className={styles.progressImg} src={urlImg} alt='' width={20} height={20} />
      <canvas
        className={styles.canvas}
        width={80}
        height={80}
        ref={canvasRef}
      >
      </canvas>
    </div>
  )
}

export default ProgressBar