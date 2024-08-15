'use client';

import { FC, useRef } from 'react';
import styles from './Start.module.scss';
import useOnScreen from '@/shared/hooks/useOnScreen';
import { StartConfig } from '@/shared/config/config';
import InfoCard from '@/shared/ui/InfoCard/InfoCard';

const Start: FC = () => {
    const triangleRef = useRef<HTMLDivElement | null>(null);
    const startRef = useRef<HTMLElement | null>(null);

    useOnScreen(startRef, () => {
        triangleRef.current?.classList.add(styles.animation);
    });

    return (
        <section ref={startRef} className={styles.start}>
            <div className={styles.triangle} ref={triangleRef} />
            <div className={styles.box}>
                <h2 className={styles.title}>Старт</h2>
                <ul className={styles.list}>
                    {StartConfig.list.map((item, index) => (
                        <li key={'infoCard-' + index}>
                            <InfoCard
                                title={item.title}
                                image={'/icons/start/' + item.image}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export { Start };
