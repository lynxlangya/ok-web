import styles from '@/styles/home/home.module.less';
import { SyncOutlined } from '@ant-design/icons'

const SubHead = (props: any) => {
  console.log(props);
  const { title, subTitle } = props;
  return (
    <div className={styles.title_box}>
      <div>
        <span className={styles.title}>{ title }</span>
        <span className={styles.sub_title}>{ subTitle }</span>
      </div>
      <div className="btn_style">
        <span className="btn_trs" onClick={props.clickSwitch}><SyncOutlined /> 换一批</span>
        <span onClick={props.allClick}>全部</span>
      </div>
      <style jsx>{`
        .btn_style {
          display: flex;
          align-items: center;
          color: #407dc1;
          cursor: pointer;
        }
        .btn_trs {
          color: #919191;
          margin-right: 1rem;
        }
      `}
      </style>
    </div>
  )
}

export default SubHead