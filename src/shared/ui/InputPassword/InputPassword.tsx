import React, { useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'

import styles from './InputPassword.module.scss'

const InputPassword = ({value, setValue, error}: {value: string, setValue: (e: React.ChangeEvent<HTMLInputElement>) => void, error?: boolean}) => {
  const [switchHide, setSwitchHide] = useState<boolean>(true)

  return (
    <div className={styles.form_input_container}>
      <input
        value={value}
        onChange={e => setValue(e)}
        className={cn(styles.form_input, {
          [styles.form_invalidinput]: error
        })}
        type={switchHide ? 'password' : 'text'}
        placeholder=""
      />
      {switchHide ? <>
        <Image
          onClick={(e) => setSwitchHide(!switchHide)}
          className={styles.form_toggle_input}
          src={'/icons/auth/hideinput.svg'}
          alt='hide'
          width={30}
          height={30}
        />
      </>:<>
        <Image
          onClick={(e) => setSwitchHide(!switchHide)}
          className={styles.form_toggle_input}
          src={'/icons/auth/showinput.svg'}
          alt='show'
          width={30}
          height={30}
        />
      </>}
    </div>
  )
}

export default InputPassword