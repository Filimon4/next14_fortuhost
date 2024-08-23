import React, { useEffect, useRef } from 'react'

import styles from './ModalRange.module.scss'
import { ProjetCreateConfig } from '@/shared/config/config'

const ModalRange = ({
  value,
  setValue
}: {
  value: any,
  setValue: any
}) => {
  const inputRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    if (inputRef.current && sliderRef.current) {
      //@ts-ignore
      sliderRef.current.style.width = `${Math.round((value/inputRef.current.max) * 100)}%`
    }
  }, [value])

  return (
    <div className={styles.from_range_container}>
      <input
        ref={inputRef}
        className={styles.form_range}
        type={ProjetCreateConfig.field[1].type}
        step={'1'}
        min={`${ProjetCreateConfig.field[1].min}`}
        max={`${ProjetCreateConfig.field[1].max}`}
        onChange={(e) => setValue(+e.target.value)}
        value={value}
      />
      <span ref={sliderRef} className={styles.from_range_fill}></span>
    </div>
  )
}

export default ModalRange