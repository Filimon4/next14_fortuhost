import { FC, useEffect } from 'react';
import styles from './About.module.scss';
import { AboutList } from './AboutComponents';

const About: FC = () => {
    return (
        <section className={styles.about}>
            <h2 className={styles.title}>Почему мы?</h2>
            <AboutList />
        </section>
    );
};

export { About };
