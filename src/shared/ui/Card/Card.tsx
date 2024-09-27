import { FC, PropsWithChildren } from 'react';
import Image from 'next/image';
import styles from './Card.module.scss';
import cn from 'classnames';

interface ICard {
    image: string;
    className?: string;
}

const Card: FC<PropsWithChildren<ICard>> = ({ image, children, className }) => {
    return (
        <article className={cn(styles.card, className)}>
            <Image alt="card-image" src={image} width={129} height={129} />
            {children}
        </article>
    );
};

export default Card;
