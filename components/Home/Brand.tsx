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
          书香山不言不语，却启人深思，莫非靠的是文明浸润？莫非是沾了校园的翰墨之光，才如此典雅有度？
          一个周末，散步来到书香山旁的林荫大道，一对斑鸠从山上林子里飞出，落脚在前方，我饶有兴味地观察，只见它们走近后，互吻，然后双双飞远。动物居然也如此绅士！此情此景，恐怕要颠覆文明举止只是人类才有的认知了。当一座山有了自己的心跳，当她的心跳被我们触摸、谛听，她还是没有思想的山吗？所谓山有灵性，恐怕昭示的也是这一点吧。
        </div>
      </div>
    </div>
  );
};

export default Brand;
