import { Divider } from 'antd';
import styles from '@/styles/home/counter.module.less';

const Counter = () => {
  return (
    <div className={styles.count_box}>
      <div className={styles.count_content}>
        <div>
          <div className={styles.count_title}>2021-10</div>
          <div className={styles.count_sub_title}>项目上线时间</div>
        </div>
        <Divider type="vertical" className={styles.count_divider} />
        <div>
          <div className={styles.count_title}>2021-10</div>
          <div className={styles.count_sub_title}>项目上线时间</div>
        </div>
        <Divider type="vertical" className={styles.count_divider} />
        <div>
          <div className={styles.count_title}>2021-10</div>
          <div className={styles.count_sub_title}>项目上线时间</div>
        </div>
        <Divider type="vertical" className={styles.count_divider} />
        <div>
          <div className={styles.count_title}>2021-10</div>
          <div className={styles.count_sub_title}>项目上线时间</div>
        </div>
      </div>
    </div>
  )
}

export default Counter;