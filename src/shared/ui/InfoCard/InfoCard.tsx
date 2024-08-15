import { FC } from 'react';
import Image from 'next/image';
import styles from './InfoCard.module.scss';
import { IInfoCard } from '@/shared/models/config';


const InfoCard: FC<IInfoCard> = ({ title, image }) => {
    return (
        <article className={styles.card}>
            <p className={styles.title}>{title}</p>
            <Image className={styles.img} src={image} alt="info-img" width={129} height={129} />
        </article>
    );
};

export default InfoCard;
