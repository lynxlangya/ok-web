import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import MasterTitle from '@/components/MasterTitle'
import styles from '@/styles/about.module.less'

const About: NextPage = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <MasterTitle title="关于我们" subTitle="About Us" />
        <div className={styles.article_box}>
          渲染数据就完事
        </div>
      </section>
    </Layout>
  );
};

export default About;
