import Head from 'next/head';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from '@/styles/Layout.module.less';
import moment from 'dayjs'
import Header from './Header'
import SwiperCard from './Swiper'

export const siteTitle = 'OK-ADMIN 首页｜官方网站｜后台系统';
export const siteDesc = 'OK-ADMIN 首页｜官方网站｜后台系统｜后台管理｜Next.js｜React';

const Layout = ({ children, home }: any) => {
  console.log(home);
  const router = useRouter()
  console.log(router);

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
      <footer className={styles.footer}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
        <div className={styles.company}>
          简介....
        </div>
        {/* 备案地址 */}
        <div onClick={_handleOpenFil} className={styles.fil}>
          CopyRight©️ { moment().format('YYYY') } OK | All Right Reserved | 陇ICP备2021002435号
        </div>
      </footer>
    </section>
  );
};

function _handleOpenFil() {
  window.open('https://beian.miit.gov.cn', '_blank');
}

export default Layout;
