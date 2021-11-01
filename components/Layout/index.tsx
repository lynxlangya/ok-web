import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '@/styles/Layout.module.less';
import Header from './Header'
import Footer from './Footer'
import SwiperCard from './Swiper'

export const siteTitle = 'OK-ADMIN 首页｜官方网站｜后台系统';
export const siteDesc = 'OK-ADMIN 首页｜官方网站｜后台系统｜后台管理｜Next.js｜React';

const Layout = ({ children, home }: any) => {
  const router = useRouter()
  return (
    <section className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>OK-ADMIN 首页｜官方网站｜后台系统</title>
        <meta name="og:title" content={siteTitle} />
        <meta name="og:description" content={siteDesc} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      {
        router.pathname === '/' ? 
          <SwiperCard />
         : <div className={styles.bg_style}></div>
      }
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
