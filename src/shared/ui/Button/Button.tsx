import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type TButton = { disabled?: boolean } & HTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<TButton>> = ({ children, disabled, ...args }) => {
    return (
        <button
            {...args}
            disabled={disabled}
            type="button"
            className={`${styles.button} ${args.className ?? ''}`}>
            {children}
        </button>
    );
};

export default Button;
