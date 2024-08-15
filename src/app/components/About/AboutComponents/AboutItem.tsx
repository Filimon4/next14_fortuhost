import Card from '@/shared/ui/Card/Card';
import { FC } from 'react';
import styles from '../About.module.scss';
import { IAboutItem } from '@/shared/models/config';

const AboutItem: FC<IAboutItem> = ({ image, title, description }) => {
    return (
        <li className={styles.aboutItem}>
            <Card className={styles.card} image={'/icons/about/' + image}>
                <h3 className={styles.cardTitle}>{title}</h3>
            </Card>
            <p className={styles.aboutText}>{description}</p>
        </li>
    );
};

export { AboutItem };
