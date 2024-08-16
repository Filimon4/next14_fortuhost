import React from 'react'

import styles from "./BoardProject.module.scss";
import Image from 'next/image';

const BoardProject = () => {
  return (
    <div className={styles.project_container}>
      <div className={styles.app_preview}>
        <Image
          src={'/icons/dashboard/add.svg'}
          alt='add project'
          width={60}
          height={60}
        />
        <div className={styles.prview_desc}>
          <p className={styles.desc_title}>
            Добавьте свой первый проект на python совершенно <span>бесплатно!</span>
          </p>
          <p>
            Вы можете загрузить проект из zip-архива, из Github <br /> или создать пустой
          </p>
        </div>
      </div>
    </div>
  )
}

export default BoardProject