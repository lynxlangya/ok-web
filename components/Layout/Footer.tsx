import moment from 'dayjs';
import styles from '@/styles/layout/footer.module.less';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.company}>
        <div>
          <h3 className={styles.introduce}>OK-WEB</h3>
          <div className={styles.introduce}>技术栈：Next.js、TypeScript、React、Docker</div>
          <div className={styles.introduce}>一个服务端渲染的官网实践</div>
        </div>
        <div className={styles.qr_box}>
          <Image
            src="http://cdn.wangdaoo.com/qrcode.jpeg"
            width={120}
            height={120}
            alt="qrCode"
          />
          <div className={styles.qr_title}>微信｜深入交流一下</div>
        </div>
      </div>
      {/* 备案地址 */}
      <div onClick={_handleOpenFil} className={styles.fil}>
        CopyRight©️ {moment().format('YYYY')} 
        OK | All Right Reserved | 陇ICP备2021002435号
      </div>
    </footer>
  );
};

function _handleOpenFil() {
  window.open('https://beian.miit.gov.cn', '_blank');
}

export default Footer;
