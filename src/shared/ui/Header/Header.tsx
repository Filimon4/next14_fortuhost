'use client';

import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';
import Image from 'next/image';
import { AppRoute, RouteConfig } from '@/shared/config/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isVisibleMobileMenu, setIsVisibleMobileMenu] = useState(false);

    return (
        <header className={styles.header}>
            <nav className={styles.box}>
                <Logo to={RouteConfig.HOME} />
                <button
                    className={styles.tabletBurger}
                    onClick={() => setIsVisibleMobileMenu((prev) => !prev)}>
                    <Image src="/icons/tablet-burger.svg" width={70} height={70} alt="burger" />
                </button>
                <button
                    className={styles.mobileBurger}
                    onClick={() => setIsVisibleMobileMenu((prev) => !prev)}>
                    <Image src="/icons/mobile-burger.svg" width={50} height={50} alt="burger" />
                </button>
                <ul className={styles.navList}>
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
                {isVisibleMobileMenu && (
                    <ul className={styles.mobileNavList}>
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
                )}
            </nav>
        </header>
    );
};

export default Header;
