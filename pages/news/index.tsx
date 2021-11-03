import Layout from '@/components/Layout';
import type { NextPage } from 'next';
import MasterTitle from '@/components/MasterTitle'
import styles from '@/styles/about.module.less'
import { message } from 'antd'

const About: NextPage = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <MasterTitle title="行业动态" subTitle="News" isSearch onSearch={_handleSearch} />
        <div className={styles.article_box}>
          渲染数据就完事
        </div>
      </section>
    </Layout>
  );
};

function _handleSearch(value: string) {
  message.info(value);
}

export default About;
