'use client';

import { AboutConfig } from '@/shared/config/config';
import { FC, useEffect, useRef } from 'react';
import styles from '../About.module.scss';
import { AboutItem } from './AboutItem';
import useOnScreen from '@/shared/hooks/useOnScreen';

const AboutList: FC = () => {
    const listRef = useRef<HTMLOListElement | null>(null);

    useOnScreen(listRef, () => {
        listRef.current?.classList.add(styles.animation);
    });

    return (
        <ol ref={listRef} className={styles.aboutList}>
            {AboutConfig.list.map((item, index) => (
                <AboutItem key={'about-' + index + 1} {...item} />
            ))}
        </ol>
    );
};

export { AboutList };
