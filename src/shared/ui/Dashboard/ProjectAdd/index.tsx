import React, { useState } from 'react'
import Image from 'next/image'

import styles from './ProjectAdd.module.scss'

const ProjectAdd = ({
  onAdd
}: {
  onAdd: () => void
}) => {
  const [hover, setHover] = useState(false)

  return (
    <div className={styles.project} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)} onClick={onAdd}>
      {hover ? <>
        <Image src={'/icons/dashboard/add_light.svg'} alt='' width={66} height={66} />
      </> : <>
        <Image src={'/icons/dashboard/add.svg'} alt='' width={60} height={60} />
      </>}
    </div>
  )
}

export default ProjectAdd