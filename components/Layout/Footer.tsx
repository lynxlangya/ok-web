import styles from '@/styles/Layout.module.less';
import Link from 'next/link'
import moment from 'dayjs'

const Footer = () => {
  return (
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
  )
}

function _handleOpenFil() {
  window.open('https://beian.miit.gov.cn', '_blank');
}

export default Footer