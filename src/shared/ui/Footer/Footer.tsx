import { FC } from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../Header/Header.module.scss';
import s from './Footer.module.scss';
import { AppRoute } from '@/shared/config/navigation';

const Footer: FC = () => {

    return (
        <footer className={s.footer}>
            <section id="info" className={s.info}>
                <Logo to="/" />
                <p>
                    ООО &#34;ФОРТУПРОДЖЕКТ&#34;
                    <br />
                    ИНН 2372032969
                    <br />
                    КПП 237201001
                    <br />
                    ОГРН 1232300063379
                </p>
            </section>
            <section className={s.navigation} id="navigation">
                <ul className={s.navList}>
                    {Object.entries(AppRoute).map(([route, link]) => {
                        const dataAttrs = { 'data-content': link };
                        return (
                            <li key={link} className={styles.navItem}>
                                <Link className={styles.navLink} {...dataAttrs} href={route}>
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </section>
            <section id="links" className={s.links}>
                <Link href="/license" target="_blank" className={s.text}>
                    Лицензионное соглашение
                </Link>
                <article className={s.icons}>
                    <a href="https://vk.com" target="_blank">
                        <Image src="/icons/vk.svg" alt="vk" width={40} height={40} />
                    </a>
                    <a href="https://t.me" target="_blank">
                        <Image src="/icons/telegram.svg" alt="telegram" width={40} height={40} />
                    </a>
                </article>

                <a href="mailto:support@fortuhost.ru" target="_blank" className={s.text}>
                    Support@fortuhost.ru
                </a>
            </section>
            <section id="links" className={s.sponsor}>
                <p>При поддержке</p>
                <Image src='/icons/fond_rf.png' alt='' height={112} width={220} />
            </section>
        </footer>
    );
};
export default Footer;
