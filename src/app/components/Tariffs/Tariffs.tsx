'use client';

import { FC, useState } from 'react';
import styles from './Tariffs.module.scss';
import Card from '@/shared/ui/Card/Card';
import { TariffsConfig } from '@/shared/config/config';
import cn from 'classnames';
import { useMutation } from '@tanstack/react-query';

const Tariffs: FC = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Тарифы</h2>
            <ul className={styles.list}>
                {TariffsConfig.list.map((tariff, index) => (
                    <li
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        key={'tariff-' + index}>
                        <Card className={styles.card} image={'/icons/tariffs/' + tariff.image}>
                            <span className={styles.cardInfo}>
                                <h3 className={styles.cardTitle}>{tariff.title}</h3>
                                <span className={styles.infoFst}>
                                    <p>RAM {tariff.ram}</p>
                                    <p>SSD {tariff.ssd}</p>
                                </span>
                                {hoverIndex === index && (
                                    <span
                                        className={cn(styles.infoScd, {
                                            [styles.cardAni]: hoverIndex === index,
                                        })}>
                                        <p>RAM {tariff.ram}</p>
                                        <p>SSD {tariff.ssd}</p>
                                    </span>
                                )}
                                <p>{tariff.price}</p>
                            </span>
                        </Card>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export { Tariffs };
