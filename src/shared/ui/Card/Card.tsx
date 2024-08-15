import { FC, PropsWithChildren } from 'react';
import styles from './Card.module.scss';
import cn from 'classnames';

interface ICard {
    image: string;
    className?: string;
}

const Card: FC<PropsWithChildren<ICard>> = ({ image, children, className }) => {
    return (
        <article className={cn(styles.card, className)}>
            <img alt="card-image" src={image} />
            {children}
        </article>
    );
};

export default Card;
