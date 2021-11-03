import type { NextPage } from 'next';
import { message } from 'antd';
import Layout from '@/components/Layout';
import server from '@/utils/server';
import { useDispatch } from 'react-redux';
import { createMenu } from '@/store/menu';
import { createSwiper } from '@/store/swiper';
import styles from '@/styles/home/home.module.less';
import Product from '@/components/Home/Product';
import Counter from '@/components/Home/Counter';
import Brand from '@/components/Home/Brand';
import Spikes from '@/components/Home/Spikes';
import Sms from '@/components/Home/Sms';
import SubHead from '@/components/SubHead';

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
        {/* 模块标题 */}
        <SubHead
          title="热门推荐"
          subTitle="Hot Picks"
          allClick={_handleAllHot}
          clickSwitch={_handleSwitchHot}
        />
        {/* 热门商品 */}
        <Product />
        {/* 数据展示 */}
        <Counter />
        {/* 品牌展示 */}
        <Brand />
        <SubHead
          title="限时秒杀"
          subTitle="Time Up"
          clickSwitch={_handleSwitchTime}
          allClick={_handleAllTime}
        />
        <Spikes />
        <SubHead
          title="行业简讯"
          subTitle="News"
          clickSwitch={_handleSwitchTime}
          allClick={_handleAllTime}
        />
        <Sms />
      </section>
    </Layout>
  );
};

function _handleSwitchHot() {
  message.info('热门换一批');
}

function _handleSwitchTime() {
  message.info('秒杀换一批');
}

function _handleAllHot() {
  message.success('热门全部');
}

function _handleAllTime() {
  message.success('秒杀全部');
}

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
