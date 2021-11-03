import type { NextPage } from 'next';
import Layout from '@/components/Layout';
import server from '@/utils/server';
import { useDispatch } from 'react-redux';
import { createMenu } from '@/store/menu';
import { createSwiper } from '@/store/swiper';
import styles from '@/styles/home/home.module.less';
import Product from '@/components/Home/Product'
import Counter from '@/components/Home/Counter'
import Brand from '@/components/Home/Brand'

const Home: NextPage = (props: any) => {
  const dispatch = useDispatch();
  // TODO: 接口处理
  /**菜单 */
  // dispatch(createMenu(props.menu));
  // /**轮播图 */
  // dispatch(createSwiper(props.swiper));
  console.log(
    `
         iii        
        iii   iiii       
       iii  iiii        
      iii  iii  iiii   
     iii iiii iiiii   
    iii iii iiiii    
   iiiiiiiiiii        
  iiiiiiiiii        
  iiiiiiiiiiiiiii   
  iiiiiiiiiii  iii  
  iiiiiiiiii    iii   
  iiiiiiiii         
  iiiiiiiiii   iii   
  iiiiiiiiiiiiiii   
    iiiiiiiiiiii    
       tiiiiii
    `
  );
  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.title_box}>
          <div>
            <span className={styles.title}>热门推荐</span>
            <span className={styles.sub_title}>Hot Picks</span>
          </div>
          <div className={styles.sub_title}>全部</div>
        </div>
        {/* 热门商品 */}
        <Product />
        {/* 数据展示 */}
        <Counter />
        {/* 品牌展示 */}
        <Brand />
      </section>
    </Layout>
  );
};

// export const getStaticProps = async (): Promise<any> => {
//   const menu = await server('/api/menu');
//   const swiper = await server('/api/swiper');
//   return {
//     props: {
//       menu: menu.list,
//       swiper: swiper.list,
//     },
//     // 开启 ISR，最多每10s重新生成一次页面
//     // revalidate: 10,
//   };
// };
export default Home;
