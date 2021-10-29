import Image from 'next/image';
// import styles from '@/styles/Home.module.scss';
import type { NextPage } from 'next';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
  const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]
  return (
    <Layout>
      <section>
        { list.map(it => {
          return <h1 key={it}>{it}</h1>
        }) }
      </section>
    </Layout>
  );
};
export default Home;
