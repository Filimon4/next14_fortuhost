import Header from '@/shared/ui/Header/Header';
import RootLayout from './layout';
import styles from './main.module.scss';
import { About, MainPreview, Start, Tariffs } from '@/components/Main';
import Register from '@/components/Main/Register/Register';
import Footer from '@/shared/ui/Footer/Footer';

const Home = () => {
    return (
        <RootLayout>
            <div className={styles.box}>
                <Header />
                <main className={styles.main}>
                    <MainPreview />
                    <About />
                    <Start />
                    <Tariffs />
                    <Register />
                </main>
                <Footer />
            </div>
        </RootLayout>
    );
};

export default Home;
