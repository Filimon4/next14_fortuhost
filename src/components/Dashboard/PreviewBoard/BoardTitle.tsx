import React from 'react'

import styles from "./BoardTitle.module.scss";

const BoardTitle = () => {
  return (
    <div className={styles.board_container}>
      <h1 className={styles.board_title}>Мои проекты</h1>
      <p className={styles.board_desc}>Здесь будут размещены все ваши проекты и эелементы управления ими</p>
    </div>
  )
}

export default BoardTitle