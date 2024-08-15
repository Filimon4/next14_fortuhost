import { FC } from 'react';
import cn from 'classnames';
import { Prosto_One } from 'next/font/google';
import styles from '../MainPreview.module.scss';

const font = Prosto_One({ weight: ['400'], subsets: ['latin', 'cyrillic'] });

const Description: FC = () => {
    return (
        <article className={styles.description}>
            <h1 className={cn(font.className, styles.title)}>Хостинг приложений на python</h1>
            <p className={cn(font.className, styles.paragraph)}>
                Управляйте своими ботами и приложениями с легкостью - всего в пару кликов!
                От размещения до запуска, контролируйте каждый этап работы ваших проектов
            </p>
        </article>
    );
};

export { Description };
