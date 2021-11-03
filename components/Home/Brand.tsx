import styles from '@/styles/home/brand.module.less';
import Image from 'next/image';
import { imageLoader } from '@/utils/func'

const Brand = () => {
  const imgUrl = 'http://cdn.wangdaoo.com/300x300.png';
  return (
    <div className={styles.container}>
      <Image loader={imageLoader} src={imgUrl} width={300} height={300} alt="brand" />
      <div className={styles.brand_box}>
        <div className={styles.title}>品牌故事</div>
        <div className={styles.sub_title}>Brand Story</div>
        <div className={styles.text}>
          你的名字，一直徘徊在心底，然而这份思念，却无法传达给你。ほどほどに爱しなさい。长続きする恋はそういう恋だよ。请恰如其分的去爱，那样恋爱才能长久吧！もしあの时あなたにあってなかったら、こんなにも深く谁かを爱することを、知らずに生きたでしょう。如果那时没有遇见你，可能这一生，都不会知道如此爱一个人的滋味吧毎朝（まいあさ）起（お）きるとき、今日（きょう）もすばらしい一日（いちにち）になると信（しん）じることだ。每天起来都要相信今天会是美好的一天。自分こそ正〔ただ〕しい、という考〔かんが〕えが、あらゆる进歩〔しんぼ〕の过程〔かてい〕でもっとも顽强〔がんきょう〕な障害〔しょうがい〕となる。只有自己才是正确的，这种想法会成为所有进步过程中最顽固的障碍。
        </div>
      </div>
    </div>
  );
};

export default Brand;
