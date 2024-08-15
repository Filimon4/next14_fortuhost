import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Logo.module.scss';
import { Audiowide } from 'next/font/google';
import cn from 'classnames';

const audiowide = Audiowide({ weight: '400', subsets: ['latin'] });

interface ILogo {
    to: string;
}

const Logo: FC<ILogo> = ({ to }) => {
    const dataAttrs = { 'data-content': 'FortuHost' };
    return (
        <Link className={cn(styles.logo, audiowide.className)} href={to}>
            <Image className={styles.img} src="/icons/logo.svg" alt="logo" width={72} height={73} />
            <span className={styles.text} {...dataAttrs}>
                FortuHost
            </span>
        </Link>
    );
};

export default Logo;
