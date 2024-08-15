import Header from '@/shared/ui/Header/Header';
import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import Head from 'next/head';
import './globals.scss';
import React from 'react';
import WithQuery from './Query';

const jost = Jost({ subsets: ['latin'], weight: ['400', '700'] });

const text = {
    title: 'FortuHost: Хостинг приложений на python',
    description:
        'FortuHost: Хостинг приложений на python. Управляйте своими ботами и приложениями с легкостью - всего в пару кликов! От размещения до запуска, контролируйте каждый этап работы ваших проектов',
};

export const metadata: Metadata = {
    ...text,
    keywords: [
        'fortuhost',
        'фортухост',
        'fortuproject',
        'фортупроджект',
        'хостинг ботов',
        'хостинг приложений',
        'хостинг проектов',
        'хостинг python',
        'хостинг приложений на python',
    ],

    openGraph: {
        ...text,
        type: 'website',
        images: [{ url: 'https://i.postimg.cc/vHZyQ8L0/2024-08-01-211201854.png' }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <WithQuery>
            <html lang="ru">
                <Head>
                    <title>{text.title}</title>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/favicon/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/favicon/site.webmanifest" />
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#603cba" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>

                <body className={jost.className}>
                    {children}
                </body>
            </html>
        </WithQuery>
    );
}
