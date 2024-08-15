import { FC } from 'react';
import styles from './MainPreview.module.scss';
import { Description, Interactive } from './MainPreviewComponents';

const MainPreview: FC = () => {
    return (
        <section className={styles.preview}>
            <Description />
            <Interactive />
        </section>
    );
};

export { MainPreview };
