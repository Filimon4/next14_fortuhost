import React from 'react'

import styles from "./PreviewBoard.module.scss";

const PreviewBoard = () => {
  return (
    <div className={styles.board_container}>
      <h1 className={styles.board_title}>Мои проекты</h1>
      <p className={styles.board_desc}>Здесь будут размещены все ваши проекты и эелементы управления ими</p>
    </div>
  )
}

export default PreviewBoard